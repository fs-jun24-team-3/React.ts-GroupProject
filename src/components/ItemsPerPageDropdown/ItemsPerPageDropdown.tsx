import React, { useEffect, useState } from 'react';
import styles from './ItemsPerPageDropdown.module.scss';
import { ItemsPerPageOption } from '../../utils/types/SortOption';
import { useOutsideClick } from 'outsideclick-react';

type Props = {
  onSelect: (option: ItemsPerPageOption) => void;
  initialOption: ItemsPerPageOption;
};

export const ItemsPerPageDropdown: React.FC<Props> = ({
  onSelect,
  initialOption,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] =
    useState<ItemsPerPageOption>(initialOption);

  useEffect(() => {
    setSelectedOption(initialOption);
  }, [initialOption]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionSelect = (option: ItemsPerPageOption) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  const handleOutsideClick = () => {
    setIsOpen(false);
  };

  const ref = useOutsideClick(handleOutsideClick);

  const options: { value: ItemsPerPageOption; label: string }[] = [
    { value: 4, label: '4 per page' },
    { value: 8, label: '8 per page' },
    { value: 16, label: '16 per page' },
    { value: 'all', label: 'Show all' },
  ];

  return (
    <div ref={ref} className={styles.dropdown}>
      <span className={styles['dropdown-label']}>Show:</span>
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
              key={option.value.toString()}
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
