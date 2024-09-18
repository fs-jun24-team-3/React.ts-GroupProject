import React from 'react';
import './Footer.scss';
import { NavFooter } from './NavFooter';
import logo from '../../img/Logo.png';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {};

export const Footer: React.FC<Props> = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo">
          <img
            className="footer__logo__img"
            src={logo}
            alt="Nice Gadgets Logo"
          />
        </div>

        <NavFooter />

        <div className="footer__button">
          <span className="footer__button-text">Back to top</span>
          <div onClick={scrollToTop} className="footer__button-icon">
            <span className="footer__button-icon--arrow"></span>
          </div>
        </div>
      </div>
    </footer>
  );
};
