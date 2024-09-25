import React from 'react';
import './CartPage.scss';
import '../../styles/base/buttons.scss';
import { WideButton } from '../../components/Buttons/WideButton';
import { useNavigate } from 'react-router-dom';
import { BackButton } from '../../components/Buttons/BackButton';
import { useAppDispatch, useAppSelector } from '../../app/reduxHooks';
import { RootState } from '../../app/store';
import { CartItems } from '../../utils/types/CartItem';
import { CartItem } from './CartItem/CartItem';
import {
  clearCart,
  selectTotalCost,
  selectTotalQuentity,
} from '../../app/slices/cartSlise';
import { addToOrder } from '../../app/slices/orderSlice';
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {};

export const CartPage: React.FC<Props> = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state: RootState) => state.cart.cartItems);
  const totalCost = useAppSelector((state: RootState) =>
    selectTotalCost(state.cart),
  );

  const totalQuentity = useAppSelector((state: RootState) =>
    selectTotalQuentity(state.cart),
  );

  const saveOrder = () => {
    if (cartItems.length !== 0) {
      dispatch(addToOrder(cartItems));
      dispatch(clearCart());
      navigate('/user');
    }
  };

  return (
    <div className="cart">
      <BackButton />

      <div className="cart__title">Cart</div>
      {cartItems.length === 0 && (
        <div>Your shopping cart is currently empty</div>
      )}
      <div className="cart__items">
        {cartItems.map((product: CartItems) => {
          return <CartItem key={product.item.id} cart={product} />;
        })}

        <div className="cart__total-count">
          <div className="cart__total-count__price">${totalCost}</div>
          <div className="cart__total-count__text">
            Total for {totalQuentity} items
          </div>
          <div className="cart__total-count__line"></div>
          <WideButton
            buttonTitle={'Checkout'}
            styleList={{
              height: 48,
              width: '100%',
            }}
            onClick={saveOrder}
          />
        </div>
      </div>
    </div>
  );
};
