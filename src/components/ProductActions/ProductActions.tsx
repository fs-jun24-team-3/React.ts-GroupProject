import styles from './ProductActions.module.scss';
import React from 'react';
import { FavoriteButton } from '../Buttons/FavoriteButton';
import { ButtonSize } from '../../utils/types/ButtonSize';
import { useAppDispatch, useAppSelector } from '../../app/reduxHooks';
import { addToCart, removeFromCart } from '../../app/slices/cartSlise';
import { UnionProduct } from '../../utils/types/UnionProduct';
import { addToFavorites } from '../../app/slices/favoritesSlice';
import { MainButton } from '../Buttons/MainButton';

type Props = {
  size?: Exclude<ButtonSize, ButtonSize.Small>;
  item: UnionProduct;
};

export const ProductActions: React.FC<Props> = ({
  size = ButtonSize.Default,
  item,
}) => {
  const dispatch = useAppDispatch();
  const isInCart = useAppSelector(state =>
    state.cart.cartItems.some(el => el.item.id === item.id),
  );

  const handleAddToCart = () => {
    if (item) {
      dispatch(addToCart(item));
    }
  };
  const handleRemoveFromCart = () => {
    if (item) {
      dispatch(removeFromCart(item.id));
    }
  };
  const handleAddToFavorites = () => {
    if (item) {
      dispatch(addToFavorites(item));
    }
  };
  return (
    <div className={styles['product-actions-block']}>
      <MainButton
        label={isInCart ? 'In cart' : 'Add to cart'}
        size={size}
        isSelected={isInCart}
        onClick={isInCart ? handleRemoveFromCart : handleAddToCart}
      />
      <FavoriteButton
        size={size}
        onClick={handleAddToFavorites}
        productId={item.id}
      />
    </div>
  );
};
