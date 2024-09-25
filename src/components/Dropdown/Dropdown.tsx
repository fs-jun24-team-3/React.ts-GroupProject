import React, { useEffect, useState } from 'react';
import styles from './Dropdown.module.scss';
import { SortOption } from '../../utils/types/SortOption';
import { useOutsideClick } from 'outsideclick-react';

type Props = {
  handleSort: (option: SortOption) => void;
  initialSortOption: SortOption;
};

export const Dropdown: React.FC<Props> = ({
  handleSort,
  initialSortOption,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] =
    useState<SortOption>('alphabetical');

  useEffect(() => {
    setSelectedOption(initialSortOption);
  }, [initialSortOption]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionSelect = (option: SortOption) => {
    setSelectedOption(option);
    handleSort(option);
    setIsOpen(false);
  };

  const handleOutsideClick = () => {
    setIsOpen(false);
  };

  const ref = useOutsideClick(handleOutsideClick);

  const options: { value: SortOption; label: string }[] = [
    { value: 'alphabetical', label: 'Alphabetically' },
    { value: 'price_asc', label: 'Price Ascending' },
    { value: 'price_desc', label: 'Price Descending' },
    { value: 'newest', label: 'Newest' },
  ];

  return (
    <div ref={ref} className={styles.dropdown}>
      <span className={styles['dropdown-label']}>Sort by:</span>
      <button
        className={`${styles['dropdown-toggle']} ${isOpen ? styles['dropdown-toggle-clicked'] : ''}`}
        onClick={toggleDropdown}
      >
        <span className={styles['dropdown-text']}>
          {options.find(option => option.value === selectedOption)?.label}
        </span>
        <span
          className={`${styles['dropdown-arrow']} ${
            isOpen ? styles['dropdown-arrow-up'] : styles['dropdown-arrow-down']
          }`}
        />
      </button>

      {isOpen && (
        <div className={styles['dropdown-menu']}>
          {options.map(option => (
            <button
              key={option.value}
              className={styles['dropdown-item']}
              onClick={() => handleOptionSelect(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
