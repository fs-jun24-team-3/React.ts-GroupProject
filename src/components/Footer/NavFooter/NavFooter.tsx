import React from 'react';
import './NavFooter.scss';
import { NavLink } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {};

export const NavFooter: React.FC<Props> = () => {
  return (
    <nav className="nav-footer">
      <div className="nav-footer__wrapper">
        <NavLink to="/github" className="nav-footer__link">
          Github
        </NavLink>
        <NavLink to="/contacts" className="nav-footer__link">
          Contacts
        </NavLink>
        <NavLink to="/rights" className="nav-footer__link">
          Rights
        </NavLink>
      </div>
    </nav>
  );
};
