import React from 'react';
import minus from '../../../img/icon/Minus.png';
import plus from '../../../img/icon/Plus.png';
import './CartItem.scss';
import { Tablet } from '../../../utils/types/Tablet';
import { Phone } from '../../../utils/types/Phone';
import { Accessory } from '../../../utils/types/Accessory';

type Props = {
  cart: Tablet | Phone | Accessory;
};

export const CartItem: React.FC<Props> = ({ cart }) => {
  const imageUrl = encodeURI(
    `https://raw.githubusercontent.com/mate-academy/react_phone-catalog/f064fa3751d4adbc9a531a51805d593af585860b/public/${cart.images[0]}`,
  );

  return (
    <div className="cartItem">
      <div className="block__information">
        <div className="cartItem__close"></div>
        <img src={imageUrl} />
        <div className="cartItem__name">{cart.name}</div>
      </div>
      <div className="block__price">
        <div className="cartItem__count">
          <button className="cartItem__count--button">
            <img src={minus} className="cartItem__count--button-minus" />
          </button>
          {/* <div className="cartItem__count__number">{cart.count}</div> */}
          <button className="cartItem__count--button">
            <img src={plus} className="cartItem__count--button-plus" />
          </button>
        </div>
        <div className="cartItem__price">${cart.priceRegular}</div>
      </div>
    </div>
  );
};
