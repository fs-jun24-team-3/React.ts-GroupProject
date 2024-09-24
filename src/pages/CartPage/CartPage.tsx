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
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {};

export const CartPage: React.FC<Props> = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state: RootState) => state.cart.cartItems);
  const isCartEmpty = cartItems.length < 1;
  const totalCost = useAppSelector((state: RootState) =>
    selectTotalCost(state.cart),
  );

  const totalQuentity = useAppSelector((state: RootState) =>
    selectTotalQuentity(state.cart),
  );

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
            }}
            onClick={() => {
              dispatch(clearCart());
              navigate('/userPage');
            }}
            useSucceessAnimation={true}
            isError={isCartEmpty}
          />
        </div>
      </div>
    </div>
  );
};
