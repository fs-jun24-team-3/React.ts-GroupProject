import React from 'react';
import styles from './NavHeader.module.scss';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {};

export const NavHeader: React.FC<Props> = () => {
  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    classNames(styles.nav__icon, { [styles['nav__icon--active']]: isActive });
  return (
    <div className={styles.nav}>
      <NavLink to="/" className={getNavLinkClass}>
        Home
      </NavLink>
      <NavLink to="/phones" className={getNavLinkClass}>
        Phones
      </NavLink>
      <NavLink to="/tablets" className={getNavLinkClass}>
        Tablets
      </NavLink>
      <NavLink to="/accessories" className={getNavLinkClass}>
        Accessories
      </NavLink>
    </div>
  );
};
