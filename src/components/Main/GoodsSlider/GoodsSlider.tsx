import React from 'react';
import { PhoneCard } from '../PhoneCard';
import './GoodSlider.scss';
import { Phone } from '../../../utils/types/Phone';

type Props = {
  sliderTitle: string;
};

const phones: Phone = {
  id: 'apple-iphone-11-128gb-black',
  category: 'phones',
  namespaceId: 'apple-iphone-11',
  name: 'Apple iPhone 11 128GB Black',
  capacityAvailable: ['64GB', '128GB', '256GB'],
  capacity: '128GB',
  priceRegular: 1100,
  priceDiscount: 1050,
  colorsAvailable: ['black', 'green', 'yellow', 'white', 'purple', 'red'],
  color: 'black',
  images: [
    'img/phones/apple-iphone-11/black/00.webp',
    'img/phones/apple-iphone-11/black/01.webp',
    'img/phones/apple-iphone-11/black/02.webp',
    'img/phones/apple-iphone-11/black/03.webp',
    'img/phones/apple-iphone-11/black/04.webp',
  ],
  description: [
    { title: 'Display', text: "6.1' IPS LCD" },
    { title: 'Camera', text: '12MP ultra-wide and 12MP wide cameras' },
    { title: 'Battery', text: '3110 mAh battery with fast charging' },
  ],
  screen: "6.1' IPS",
  resolution: '1792x828',
  processor: 'Apple A13 Bionic',
  ram: '4GB',
  camera: '12 Mp + 12 Mp + 12MP',
  zoom: 'Digital, 5x',
  cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
};

export const GoodsSlider: React.FC<Props> = ({ sliderTitle }) => {
  return (
    <div className="main__slider">
      <div className="slider__header">
        <h2 className="slider__title">{sliderTitle}</h2>

        <div className="slider__interactive-part">
          <button className="slider__button">
            <div className="slider__button--prev"></div>
          </button>

          <button className="slider__button">
            <div className="slider__button--next"></div>
          </button>
        </div>
      </div>
      <ul className="slider__list">
        {/* TODO: at this stage we need to load phone cards from server, map given list and render it */}
        <PhoneCard phones={phones} />
        <PhoneCard phones={phones} />
        <PhoneCard phones={phones} />
        <PhoneCard phones={phones} />
      </ul>
    </div>
  );
};
