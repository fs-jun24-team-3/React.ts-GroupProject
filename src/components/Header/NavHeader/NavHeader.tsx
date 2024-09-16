import React from 'react';
import './NavHeader.scss';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {};

export const NavHeader: React.FC<Props> = () => {
  return (
    <div className="nav">
      <NavLink
        to="/"
        className={({ isActive }) =>
          classNames('nav__icon', { 'nav__icon--active': isActive })
        }
      >
        home
      </NavLink>
      <NavLink
        to="/phones"
        className={({ isActive }) =>
          classNames('nav__icon', { 'nav__icon--active': isActive })
        }
      >
        phones
      </NavLink>
      <NavLink
        to="/tablets"
        className={({ isActive }) =>
          classNames('nav__icon', { 'nav__icon--active': isActive })
        }
      >
        tablets
      </NavLink>
      <NavLink
        to="/accessories"
        className={({ isActive }) =>
          classNames('nav__icon', { 'nav__icon--active': isActive })
        }
      >
        accessories
      </NavLink>
    </div>
  );
};
