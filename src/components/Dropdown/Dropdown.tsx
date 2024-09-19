import React, { useState } from 'react';
import styles from './dropdown.module.scss';
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {};

export const Dropdown: React.FC<Props> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const options = ['item1', 'item2', 'item3'];

  return (
    <div className={styles.dropdown}>
      <span className={styles['dropdown-label']}>label</span>
      <button
        className={`${styles['dropdown-toggle']} ${isOpen ? styles['dropdown-toggle-clicked'] : ''}`}
        onClick={toggleDropdown}
      >
        <span className={styles['dropdown-text']}>selected option</span>
        <span
          className={`${styles['dropdown-arrow']} ${
            isOpen ? styles['dropdown-arrow-up'] : styles['dropdown-arrow-down']
          }`}
        />
      </button>

      {isOpen && (
        <div className={styles['dropdown-menu']}>
          {options.map(option => (
            <button key={option} className={styles['dropdown-item']}>
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
