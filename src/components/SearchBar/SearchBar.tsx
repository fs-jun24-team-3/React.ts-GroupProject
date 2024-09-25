import React, { useState } from 'react';
import styles from './SearchBar.module.scss';

type Props = {
  onSearch: (query: string) => void;
};

export const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = () => {
    onSearch(searchTerm);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className={styles['input-wrapper']}>
      <div className={styles['input-field']}>
        <span className={styles['search-icon']} />
        <input
          className={styles['search-input']}
          type="text"
          placeholder="Type to search..."
          value={searchTerm}
          onChange={event => setSearchTerm(event.target.value)}
          onKeyDown={handleKeyPress}
        />
      </div>
      <button className={styles['search-button']} onClick={handleSubmit}>
        Search
      </button>
    </div>
  );
};
