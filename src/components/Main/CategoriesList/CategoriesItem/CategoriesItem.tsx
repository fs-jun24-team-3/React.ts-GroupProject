import React from 'react';
import './CategoriesItem.scss';
import { NavLink } from 'react-router-dom';

type Props = {
  img: string;
  title: string;
  text: string;
  link: string;
};

export const CategoriesItem: React.FC<Props> = ({ img, title, text, link }) => {
  return (
    <div className="categorie">
      <NavLink to={link}>
        <img className="categorie__img" src={img} />
        <div className="categorie__title">{title}</div>
        <div className="categorie__text">{text}</div>
      </NavLink>
    </div>
  );
};
