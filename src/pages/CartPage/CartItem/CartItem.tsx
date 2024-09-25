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
import { BASE_URL } from '../../../api/api';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

type Props = {
  cart: CartItems;
  isOrder?: boolean;
};

export const CartItem: React.FC<Props> = ({ cart, isOrder = false }) => {
  const dispatch = useAppDispatch();

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
        <img
          className="cartItem__image"
          src={`${BASE_URL}/${cart.item.images[0]}`}
        />
        <Link to={`/${cart.item.category}/${cart.item.id}`}>
          <p className="cartItem__name">{cart.item.name}</p>
        </Link>
      </div>
      <div
        className={classNames('block__price', {
          'block__price--order': isOrder,
        })}
      >
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
        <div className="cartItem__price">${cart.item.priceDiscount}</div>
        {isOrder && (
          <div className="cartItem__price">
            ${cart.item.priceDiscount * cart.count}
          </div>
        )}
      </div>
    </div>
  );
};
