import React from 'react';
import { CategoriesItem } from './CategoriesItem';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {};

export const CategoriesList: React.FC<Props> = () => {
  return (
    <div className="main-content__categories">
      <h2 className="categories__title">Shop by category</h2>

      <ul className="categories__list">
        <CategoriesItem />
      </ul>
    </div>
  );
};
