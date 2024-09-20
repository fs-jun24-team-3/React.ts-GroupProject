import React from 'react';
import { RoundButton } from '../../Buttons/RoundButton';
import { WideButton } from '../../Buttons/WideButton';
import heartImgDefault from '../../../img/headerIcon/like.png';
import { Phone } from '../../../utils/types/Phone';
import { useLocation, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../../api/api';
import { Tablet } from '../../../utils/types/Tablet';
import { Accessory } from '../../../utils/types/Accessory';

type Props = {
  item: Phone | Tablet | Accessory;
};

export const PhoneCard: React.FC<Props> = ({ item }) => {
  const { name, images, priceRegular, screen, ram, capacity, id } = item;
  const navigate = useNavigate();
  const { pathname } = useLocation();

  console.log(location);

  return (
    <li className="slider__item">
      <div className="card">
        <img
          src={BASE_URL + (Array.isArray(images) ? images[0] : images)}
          alt=""
          className="card__logo"
          onClick={() => {
            navigate(`${pathname}/${id}`);
          }}
        />
        <p className="card__title">{name}</p>
        <div className="card__inform">
          <p className="card__price">${priceRegular}</p>
          <p className="card__separator"></p>
          <ul className="card__info">
            <li className="card__item">
              <div className="card__item-name">Screen</div>
              <div className="card__item-meaning">{screen}</div>
            </li>
            <li className="card__item">
              <div className="card__item-name">Capacity</div>
              <div className="card__item-meaning">{capacity}</div>
            </li>
            <li className="card__item">
              <div className="card__item-name">RAM</div>
              <div className="card__item-meaning">{ram}</div>
            </li>
          </ul>
          <div className="card__interactive-part">
            <WideButton buttonTitle="Add to cart" />
            <RoundButton buttonImgPath={heartImgDefault} />
          </div>
        </div>
      </div>
    </li>
  );
};
