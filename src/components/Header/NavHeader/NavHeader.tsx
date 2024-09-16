import React from 'react';
import './NavHeader.scss';
import { NavLink } from 'react-router-dom';
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {};

export const NavHeader: React.FC<Props> = () => {
  return (
    <div className="nav">
      <NavLink to="/" className="nav__icon nav__icon--active">
        home
      </NavLink>
      <NavLink to="#" className="nav__icon">
        phones
      </NavLink>
      <NavLink to="#" className="nav__icon">
        tablets
      </NavLink>
      <NavLink to="#" className="nav__icon">
        accessories
      </NavLink>
    </div>
  );
};
