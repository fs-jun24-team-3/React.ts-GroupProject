import React from 'react';
import styles from './NavHeader.module.scss';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {};

export const NavHeader: React.FC<Props> = () => {
  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    classNames('nav__icon', { 'nav__icon--active': isActive });
  return (
    <div className={styles.nav}>
      <NavLink
        to="/"
        className={`${styles.nav__icon} ${styles['nav__icon--active']}`}
      >
        home
      </NavLink>
      <NavLink to="#" className={styles.nav__icon}>
        phones
      </NavLink>
      <NavLink to="#" className={styles.nav__icon}>
        tablets
      </NavLink>
      <NavLink to="#" className={styles.nav__icon}>
        accessories
      </NavLink>
    </div>
  );
};
