import React from 'react';
import './CategoriesItem.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {
  img: string;
  title: string;
  text: string;
};

export const CategoriesItem: React.FC<Props> = ({ img, title, text }) => {
  return (
    <div className="categorie">
      <img className="categorie__img" src={img} />
      <div className="categorie__title">{title}</div>
      <div className="categorie__text">{text}</div>
    </div>
  );
};
