import React from 'react';
import minus from '../../../img/icon/Minus.png';
import plus from '../../../img/icon/Plus.png';
import './CartItem.scss';
import { CartItems } from '../../../utils/types/CartItem';
import { useAppDispatch } from '../../../app/reduxHooks';
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from '../../../app/slices/cartSlise';

type Props = {
  cart: CartItems;
  isOrder?: boolean;
};

export const CartItem: React.FC<Props> = ({ cart, isOrder = false }) => {
  const dispatch = useAppDispatch();
  const imageUrl = encodeURI(
    `https://raw.githubusercontent.com/mate-academy/react_phone-catalog/f064fa3751d4adbc9a531a51805d593af585860b/public/${cart.item.images[0]}`,
  );

  const deleteItem = () => {
    dispatch(removeFromCart(cart.item.id));
  };

  const increase = () => {
    dispatch(increaseQuantity(cart.item.id));
  };

  const decrease = () => {
    dispatch(decreaseQuantity(cart.item.id));
  };

  return (
    <div className="cartItem">
      <div className="block__information">
        {!isOrder && (
          <button onClick={deleteItem} className="cartItem__close"></button>
        )}
        <img className="cartItem__image" src={imageUrl} />
        <div className="cartItem__name">{cart.item.name}</div>
      </div>
      <div className="block__price">
        <div className="cartItem__count">
          {!isOrder && (
            <button className="cartItem__count--button" onClick={decrease}>
              <img src={minus} className="cartItem__count--button-minus" />
            </button>
          )}

          <div className="cartItem__count__number">{cart.count}</div>
          {!isOrder && (
            <button className="cartItem__count--button" onClick={increase}>
              <img src={plus} className="cartItem__count--button-plus" />
            </button>
          )}
        </div>
        <div className="cartItem__price">${cart.item.priceRegular}</div>
        {isOrder && (
          <div className="cartItem__price">
            ${cart.item.priceRegular * cart.count}
          </div>
        )}
      </div>
    </div>
  );
};
