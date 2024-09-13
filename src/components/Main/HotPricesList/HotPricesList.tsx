import React from 'react';
import { HotPricesItem } from './HotPricesItem';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {};

export const HotPricesList: React.FC<Props> = () => {
  return (
    <div className="main__hot-prices-slider">
      <div className="hot-prices-slider__header">
        <h2 className="hot-prices-slider__title">Hot prices</h2>

        <div className="hot-prices-slider__interactive-part">
          <button className="hot-prices-slider__button hot-prices-slider__button--prev"></button>

          <button className="hot-prices-slider__button hot-prices-slider__button--prev"></button>
        </div>
      </div>

      <ul className="hot-prices-slider__list">
        <HotPricesItem />
      </ul>
    </div>
  );
};
