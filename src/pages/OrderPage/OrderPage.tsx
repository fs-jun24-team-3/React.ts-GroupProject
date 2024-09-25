import React from 'react';
import { BackButton } from '../../components/Buttons/BackButton';
import styles from './OrderPage.module.scss';
import { useAppSelector } from '../../app/reduxHooks';
import { RootState } from '../../app/store';
import { CartItems } from '../../utils/types/CartItem';
import { CartItem } from '../CartPage/CartItem/CartItem';
import {
  selectTotalCost,
  selectTotalQuentity,
} from '../../app/slices/cartSlise';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {};

export const OrderPage: React.FC<Props> = () => {
  const orderItems = useAppSelector(
    (state: RootState) => state.order.cartItems,
  );
  const user = useAppSelector((state: RootState) => state.order.user);

  const totalCost = useAppSelector((state: RootState) =>
    selectTotalCost(state.order),
  );

  const totalQuentity = useAppSelector((state: RootState) =>
    selectTotalQuentity(state.order),
  );

  return (
    <div className={styles.order}>
      <BackButton />

      <div className={styles.order__title}>Order Page</div>
      {orderItems.length === 0 && <div>Your order is currently empty</div>}
      <div className={styles.order_inf}>
        <div className={styles.order__items}>
          {orderItems.map((product: CartItems) => (
            <CartItem key={product.item.id} cart={product} isOrder={true} />
          ))}
        </div>
        <div className={styles.order__totalInformation}>
          <div className={styles.order__totalInformation__price}>
            ${totalCost}
          </div>
          <div className={styles.order__totalInformation__text}>
            Total for {totalQuentity} items
          </div>
          <div className={styles.order__user}>
            <div className={styles.order__user__name}>{user?.name}</div>
            <div className={styles.order__user__name}>{user?.surname}</div>
            <div className={styles.order__user__name}>{user?.phone}</div>
            <div className={styles.order__user__name}>{user?.post}</div>
            <div className={styles.order__user__name}>{user?.city}</div>
          </div>
          <div className={styles.order__totalInformation__line}></div>
        </div>
      </div>
    </div>
  );
};
