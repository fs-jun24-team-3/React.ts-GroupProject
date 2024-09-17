import React from 'react';
import { NavHeader } from './NavHeader';
import './Header.scss';
import logo from '../../img/Logo.png';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {};

export const Header: React.FC<Props> = () => {
  return (
    <header className="header">
      <div className="header__menu">
        <NavLink to="/home">
          <img className="header__logo" src={logo} />
        </NavLink>

        <NavHeader />
      </div>
      <div className="header__icons">
        <div className="header__icon--like">
          <div className="header__icons--like"></div>
        </div>
        <NavLink
          to="/cart"
          // className="header__icon--basket"
          className={({ isActive }) =>
            classNames('header__icon--basket', {
              'header__icon--active': isActive,
            })
          }
        >
          <div
            className="header__icons--basket"
            // className={({ isActive }) =>
            //   classNames('header__icons--basket', {
            //     'header__icons--active': isActive,
            //   })
            // }
          ></div>
        </NavLink>
        <div className="header__icon--menu">
          <div className="header__icons--menu"></div>
        </div>
      </div>
    </header>
  );
};
