import React from 'react';
import { CategoriesItem } from './CategoriesItem';
import './CategoriesList.scss';
import img1 from '../../../img/categoryPhones/PhonesCategory1.png';
import img2 from '../../../img/categoryPhones/PhonesCategory2.png';
import img3 from '../../../img/categoryPhones/PhonesCategory3.png';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {};

export const CategoriesList: React.FC<Props> = () => {
  return (
    <div className="categories">
      <h2 className="categories__title">Shop by category</h2>

      <ul className="categories__list">
        <CategoriesItem img={img1} title={'Mobile phones'} text={'95 models'} />
        <CategoriesItem img={img2} title={'Tablets'} text={'24 models'} />
        <CategoriesItem img={img3} title={'Accessories'} text={'100 models'} />
      </ul>
    </div>
  );
};
