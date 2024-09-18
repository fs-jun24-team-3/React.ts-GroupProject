import React from 'react';
import './NavHeader.scss';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {};

export const NavHeader: React.FC<Props> = () => {
  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    classNames('nav__icon', { 'nav__icon--active': isActive });
  return (
    <div className="nav">
      <NavLink to="/" className={getNavLinkClass}>
        home
      </NavLink>
      <NavLink to="/phones" className={getNavLinkClass}>
        phones
      </NavLink>
      <NavLink to="/tablets" className={getNavLinkClass}>
        tablets
      </NavLink>
      <NavLink to="/accessories" className={getNavLinkClass}>
        accessories
      </NavLink>
    </div>
  );
};
