import React from 'react';
import './Main.scss';
import { MainBannerSlider } from './MainBannerSlider';
import { GoodsSlider } from './GoodsSlider';
import { CategoriesList } from './CategoriesList';
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {};

export const Main: React.FC<Props> = () => {
  return (
    <>
      <h1 className="main__title">Welcome to Nice Gadgets store!</h1>
      <div className="main__content">
        <MainBannerSlider />

        <GoodsSlider sliderTitle={'Brand new models'} />
        <CategoriesList />
        <GoodsSlider sliderTitle={'Hot prices'} />
      </div>
    </>
  );
};
