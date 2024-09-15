import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {};

export const PhoneCard: React.FC<Props> = () => {
  return (
    <li className="slider__item">
      <div className="card">
        <div className="card__logo"></div>
        <h3 className="card__title">
          {'Apple iPhone 14 Pro 128GB Silver (MQ023)'}
        </h3>
        <div className="card__price">$999</div>
        <div className="card__separator"></div>
        <ul className="card__info">
          <li className="card__item">
            <div className="card__item-name">Screen</div>
            <div className="card__item-meaning">6.1” OLED</div>
          </li>
          <li className="card__item">
            <div className="card__item-name">Capacity</div>
            <div className="card__item-meaning">128 GB</div>
          </li>
          <li className="card__item">
            <div className="card__item-name">RAM</div>
            <div className="card__item-meaning">6 GB</div>
          </li>
        </ul>
        <div className="card__interactive-part">
          <button className="card__button card_button--buy">Add to cart</button>
          <button className="card__button card_button--like">Like</button>
        </div>
      </div>
    </li>
  );
};
