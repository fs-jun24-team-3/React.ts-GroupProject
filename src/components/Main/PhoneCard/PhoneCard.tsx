import React from 'react';
import { RoundButton } from '../../Buttons/RoundButton';
import { WideButton } from '../../Buttons/WideButton';
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {};

export const PhoneCard: React.FC<Props> = () => {
  return (
    <li className="slider__item">
      <div className="card">
        <img
          src="./src/img/mainIcons/PhoneLogo.png"
          alt=""
          className="card__logo"
        />
        <p className="card__title">
          {'Apple iPhone 14 Pro 128GB Silver (MQ023)'}
        </p>
        <p className="card__price">$999</p>
        <p className="card__separator"></p>
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
          <WideButton buttonTitle="Add to cart" />
          <RoundButton buttonImgPath="./src/img/headerIcon/like.png" />
        </div>
      </div>
    </li>
  );
};
