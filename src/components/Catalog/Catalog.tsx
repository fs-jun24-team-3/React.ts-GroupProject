import React, { useState } from 'react';
import styles from './Catalog.module.scss';
import { PhoneCard } from '../Main/PhoneCard';
import { UnionProduct } from '../../utils/types/UnionProduct';

type Props = {
  items: UnionProduct[];
  title: string;
  isFiltered: boolean;
};

const PHONES_PER_PAGE = 12;

export const Catalog: React.FC<Props> = ({ items, title, isFiltered }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / PHONES_PER_PAGE);

  const indexOfLastPhone = currentPage * PHONES_PER_PAGE;
  const indexOfFirstPhone = indexOfLastPhone - PHONES_PER_PAGE;
  const curentItems = items.slice(indexOfFirstPhone, indexOfLastPhone);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <div className={styles.phones}>
        <div className={styles.phones__routs}>
          <div className={styles.phones__routs__home}></div>
          <div className={styles.phones__routs__array}></div>
          <div className={styles.phones__routs__currentPage}>Phones</div>
        </div>
        <div className={styles.phones__title}>{title}</div>
        <div className={styles.phones__countModel}>{items.length} models</div>
        {isFiltered && (
          <div className={styles.phonesDropdown}>Компонента Олени</div>
        )}

        <div className={styles.phones__items}>
          {curentItems.map((item: UnionProduct) => (
            <div className={styles.phones__item} key={item.id}>
              <PhoneCard item={item} />
            </div>
          ))}
        </div>
        <div className={styles.phones__pagination}>
          <button
            className={styles.phones__pagination__arr}
            onClick={() => handlePrevPage()}
          >
            <div className={styles.phones__pagination__arrLeft}></div>
          </button>
          <div className={styles.phones__pagination__buttons}>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => paginate(index + 1)}
                className={
                  currentPage !== index + 1
                    ? styles.phones__pagination__button
                    : styles.phones__pagination__button_current
                }
              >
                {index + 1}
              </button>
            ))}
          </div>
          <button
            onClick={() => handleNextPage()}
            className={styles.phones__pagination__arr}
          >
            <div className={styles.phones__pagination__arrRight}></div>
          </button>
        </div>
      </div>
    </>
  );
};
