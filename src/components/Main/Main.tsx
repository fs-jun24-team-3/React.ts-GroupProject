import React from 'react';
import './Main.scss';
import { MainBannerSlider } from './MainBannerSlider';
import { NewModelList } from './NewModelsList';
import { CategoriesList } from './CategoriesList';
import { HotPricesList } from './HotPricesList';
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {};

export const Main: React.FC<Props> = () => {
  return (
    <>
      <h1 className="main__title">Welcome to Nice Gadgets store!</h1>
      <main className="main">
        <MainBannerSlider />
        <div className="main__content">
          <NewModelList />

          <CategoriesList />

          <HotPricesList />
        </div>
      </main>
    </>
  );
};
