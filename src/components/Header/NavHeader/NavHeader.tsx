import React from 'react';
import styles from './NavHeader.module.scss';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {
  handleMenuOpen: () => void;
};

export const NavHeader: React.FC<Props> = ({ handleMenuOpen }) => {
  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    classNames(styles.nav__icon, { [styles['nav__icon--active']]: isActive });
  return (
    <div className={styles.nav}>
      <NavLink to="/" className={getNavLinkClass} onClick={handleMenuOpen}>
        Home
      </NavLink>
      <NavLink
        to="/phones"
        className={getNavLinkClass}
        onClick={handleMenuOpen}
      >
        Phones
      </NavLink>
      <NavLink
        to="/tablets"
        className={getNavLinkClass}
        onClick={handleMenuOpen}
      >
        Tablets
      </NavLink>
      <NavLink
        to="/accessories"
        className={getNavLinkClass}
        onClick={handleMenuOpen}
      >
        Accessories
      </NavLink>
    </div>
  );
};
