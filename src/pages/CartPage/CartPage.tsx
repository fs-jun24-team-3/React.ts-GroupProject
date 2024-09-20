import React from 'react';
import iphone from '../../img/imageIphone.png';
import './CartPage.scss';
import '../../styles/base/buttons.scss';
import { CartItem } from './CartItem/CartItem';
import { Cart } from '../../utils/types/Cart';
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {};

const cartItems = [
  {
    id: 1,
    title: 'Apple iPhone 14 Pro 128GB Silver (MQ023)',
    img: iphone,
    price: 29.99,
    count: 1,
  },
  {
    id: 2,
    title: 'Item 2',
    img: iphone,
    price: 49.99,
    count: 2,
  },
  {
    id: 3,
    title: 'Item 3',
    img: iphone,
    price: 19.99,
    count: 3,
  },
  {
    id: 4,
    title: 'Item 4',
    img: iphone,
    price: 99.99,
    count: 1,
  },
  {
    id: 5,
    title: 'Item 5',
    img: iphone,
    price: 39.99,
    count: 4,
  },
  {
    id: 6,
    title: 'Item 6',
    img: iphone,
    price: 59.99,
    count: 2,
  },
  {
    id: 7,
    title: 'Item 7',
    img: iphone,
    price: 25.99,
    count: 1,
  },
  {
    id: 8,
    title: 'Item 8',
    img: iphone,
    price: 75.99,
    count: 3,
  },
  {
    id: 9,
    title: 'Item 9',
    img: iphone,
    price: 89.99,
    count: 2,
  },
  {
    id: 10,
    title: 'Item 10',
    img: iphone,
    price: 15.99,
    count: 5,
  },
];

export const CartPage: React.FC<Props> = () => {
  return (
    <div className="cart">
      <div className="cart__rout">
        <div className="cart__rout__img"></div>
        <div className="cart__rout__name">Back</div>
      </div>

      <div className="cart__title">Cart</div>
      <div className="cart__items">
        {cartItems.map((cartItem: Cart) => (
          <CartItem key={cartItem.id} cart={cartItem} />
        ))}

        <div className="cart__total-count">
          <div className="cart__total-count__price">$2000</div>
          <div className="cart__total-count__text">Total for 3 items</div>
          <div className="cart__total-count__line"></div>
          <button className="cart__total-count__button-checkout main__button">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};
