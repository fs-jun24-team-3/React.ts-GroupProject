import React from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../../api/api';
import { UnionProduct } from '../../../utils/types/UnionProduct';
import { ProductActions } from '../../ProductActions';

type Props = {
  item: UnionProduct;
};

export const PhoneCard: React.FC<Props> = ({ item }) => {
  const { name, category, images, priceRegular, screen, ram, capacity, id } =
    item;

  return (
    <li className="slider__item">
      <div className="card">
        <Link to={`/${category}/${id}`}>
          <img
            src={BASE_URL + (Array.isArray(images) ? images[0] : images)}
            alt="phone logo"
            className="card__logo"
          />
          <p className="card__title">{name}</p>
        </Link>
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
        </div>
        <div className="card__interactive-part">
            <ProductActions item={item} />
        </div>
      </div>
    </li>
  );
};
