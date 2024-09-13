import React from 'react';
import './Main.scss';
import { MainSlider } from './MainSlider';
import { NewModelList } from './NewModelsList';
import { CategoriesList } from './CategoriesList';
import { HotPricesList } from './HotPricesList';
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {};

export const Main: React.FC<Props> = () => {
  return (
    <main className="main">
      <div className="grid-container">
        <div className="main__content">
          <h1 className="main__title">Welcome to Nice Gadgets store!</h1>

          <MainSlider />

          <NewModelList />

          <CategoriesList />

          <HotPricesList />
        </div>
      </div>
    </main>
  );
};
