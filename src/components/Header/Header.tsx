import React from 'react';
import { NavHeader } from './NavHeader';
import './Header.scss';
import logo from '../../img/Logo.png';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {};

export const Header: React.FC<Props> = () => {
  return (
    <header className="header">
      <div className="header__menu">
        <a href="/">
          <img className="header__logo" src={logo} />
        </a>

        <NavHeader />
      </div>
      <div className="header__icons">
        <div className="header__icon--like">
          <div className="header__icons--like"></div>
        </div>
        <div className="header__icon--basket">
          <div className="header__icons--basket"></div>
        </div>
        <div className="header__icon--menu">
          <div className="header__icons--menu"></div>
        </div>
      </div>
    </header>
  );
};
