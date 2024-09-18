import React from 'react';
import { NavHeader } from './NavHeader';
import styles from './Header.module.scss';
import logo from '../../img/Logo.png';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {};

export const Header: React.FC<Props> = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__menu}>
        <NavLink to="/home">
          <img className={styles.header__logo} src={logo} />
        </NavLink>

        <NavHeader />
      </div>
      <div className={styles.header__icons}>
        <div className={styles['nav__icon--active']}>
          <div className={styles['header__icons--like']}></div>
        </div>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            classNames([styles['header__icon--basket']], {
              [styles['header__icon--active']]: isActive,
            })
          }
        >
          <div className={styles['header__icons--basket']}></div>
        </NavLink>
        <div className={styles['header__icon--menu']}>
          <div className={styles['header__icons--menu']}></div>
        </div>
      </div>
    </header>
  );
};
