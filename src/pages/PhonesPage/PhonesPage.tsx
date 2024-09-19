import React from 'react';
import styles from './PhonesPage.module.scss';
import { PhoneCard } from '../../components/Main/PhoneCard';
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {};

export const PhonesPage: React.FC<Props> = () => {
  return (
    <>
      <div className={styles.phones}>
        <div className={styles.phones__routs}>
          <div className={styles.phones__routs__home}></div>
          <div className={styles.phones__routs__array}></div>
          <div className={styles.phones__routs__currentPage}>Phones</div>
        </div>
        <div className={styles.phones__title}>Mobile phones</div>
        <div className={styles.phones__countModel}>95 models</div>
        <div className={styles.phonesDropdown}>Компонента Олени</div>
        <div className={styles.phones__items}>
          <div className={styles.phones__item}>
            <PhoneCard />
          </div>
          <div className={styles.phones__item}>
            <PhoneCard />
          </div>
          <div className={styles.phones__item}>
            <PhoneCard />
          </div>
          <div className={styles.phones__item}>
            <PhoneCard />
          </div>
          <div className={styles.phones__item}>
            <PhoneCard />
          </div>
          {/* <PhoneCard />
          <PhoneCard />
          <PhoneCard />
          <PhoneCard />
          <PhoneCard />
          <PhoneCard />
          <PhoneCard />
          <PhoneCard />
          <PhoneCard />
          <PhoneCard />
          <PhoneCard />
          <PhoneCard /> */}
        </div>
      </div>
    </>
  );
};
