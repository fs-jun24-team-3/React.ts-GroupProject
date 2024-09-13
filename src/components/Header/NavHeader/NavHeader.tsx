import React from 'react';
import './NavHeader.scss';
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {};

export const NavHeader: React.FC<Props> = () => {
  return (
    <div className="nav">
      <div className="nav__icon">home</div>
      <div className="nav__icon">phones</div>
      <div className="nav__icon">tablets</div>
      <div className="nav__icon">accessories</div>
    </div>
  );
};
