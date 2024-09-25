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
  document.title = 'Order';

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
          <div className={styles['order__user']}>
            <div className={styles['order__info']}>
              <ul className={styles['order__info--list']}>
                <li className={styles['order__info--list-item']}>
                  <strong className={styles['order__info--title']}>Name</strong>
                  <span className={styles['order__info--value']}>
                    {user?.name}
                  </span>
                </li>

                <li className={styles['order__info--list-item']}>
                  <strong className={styles['order__info--title']}>
                    Surname
                  </strong>
                  <span className={styles['order__info--value']}>
                    {user?.surname}
                  </span>
                </li>

                <li className={styles['order__info--list-item']}>
                  <strong className={styles['order__info--title']}>
                    Phone
                  </strong>
                  <span className={styles['order__info--value']}>
                    {user?.phone}
                  </span>
                </li>

                <li className={styles['order__info--list-item']}>
                  <strong className={styles['order__info--title']}>Post</strong>
                  <span className={styles['order__info--value']}>
                    {user?.post}
                  </span>
                </li>

                <li className={styles['order__info--list-item']}>
                  <strong className={styles['order__info--title']}>City</strong>
                  <span className={styles['order__info--value']}>
                    {user?.city}
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.order__totalInformation__line}></div>
        </div>
      </div>
    </div>
  );
};
