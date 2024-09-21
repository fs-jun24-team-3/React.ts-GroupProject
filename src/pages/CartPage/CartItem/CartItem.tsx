import React from 'react';
import minus from '../../../img/icon/Minus.png';
import plus from '../../../img/icon/Plus.png';
import './CartItem.scss';
import { Cart } from '../../../utils/types/Cart';

type Props = {
  cart: Cart;
};

export const CartItem: React.FC<Props> = ({ cart }) => {
  return (
    <div className="cartItem">
      <div className="block__information">
        <div className="cartItem__close"></div>
        <img src={cart.img} />
        <div className="cartItem__name">{cart.title}</div>
      </div>
      <div className="block__price">
        <div className="cartItem__count">
          <button className="cartItem__count--button">
            <img src={minus} className="cartItem__count--button-minus" />
          </button>
          <div className="cartItem__count__number">{cart.count}</div>
          <button className="cartItem__count--button">
            <img src={plus} className="cartItem__count--button-plus" />
          </button>
        </div>
        <div className="cartItem__price">${cart.price}</div>
      </div>
    </div>
  );
};
