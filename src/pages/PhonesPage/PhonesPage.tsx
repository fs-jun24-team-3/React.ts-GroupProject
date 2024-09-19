import React, { useEffect, useState } from 'react';
import styles from './PhonesPage.module.scss';
import { PhoneCard } from '../../components/Main/PhoneCard';
import { loadPhones } from '../../app/slices/phonesSlice';

import { RootState } from '../../app/store';
import { useAppDispatch, useAppSelector } from '../../app/reduxHooks';
import { Phone } from '../../utils/types/Phone';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {};

const PHONES_PER_PAGE = 12;

export const PhonesPage: React.FC<Props> = () => {
  const dispatch = useAppDispatch();
  const phones = useAppSelector((state: RootState) => state.phones.phones);

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(phones.length / PHONES_PER_PAGE);

  const indexOfLastPhone = currentPage * PHONES_PER_PAGE;
  const indexOfFirstPhone = indexOfLastPhone - PHONES_PER_PAGE;
  const currentPhones = phones.slice(indexOfFirstPhone, indexOfLastPhone);

  useEffect(() => {
    dispatch(loadPhones());
  }, [dispatch]);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <div className={styles.phones}>
        <div className={styles.phones__routs}>
          <div className={styles.phones__routs__home}></div>
          <div className={styles.phones__routs__array}></div>
          <div className={styles.phones__routs__currentPage}>Phones</div>
        </div>
        <div className={styles.phones__title}>Mobile phones</div>
        <div className={styles.phones__countModel}>{phones.length} models</div>
        <div className={styles.phonesDropdown}>Компонента Олени</div>
        <div className={styles.phones__items}>
          {currentPhones.map((phones: Phone) => (
            <div className={styles.phones__item} key={phones.id}>
              <PhoneCard phones={phones} />
            </div>
          ))}
        </div>
        <div className={styles.phones__pagination}>
          <button className={styles.phones__pagination__arr}>
            <div className={styles.phones__pagination__arrLeft}></div>
          </button>
          <div className={styles.phones__pagination__buttons}>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => paginate(index + 1)}
                // className={currentPage === index + 1 ? styles.activePage : ''}
                className={styles.phones__pagination__button}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <button className={styles.phones__pagination__arr}>
            <div className={styles.phones__pagination__arrRight}></div>
          </button>
        </div>
      </div>
    </>
  );
};
