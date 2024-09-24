import { MainButton } from '../Buttons/MainButton';
import styles from './ProductActions.module.scss';
import React from 'react';
import { FavoriteButton } from '../Buttons/FavoriteButton';
import { ButtonSize } from '../../utils/types/ButtonSize';
import { useAppDispatch } from '../../app/reduxHooks';
import { addToCart } from '../../app/slices/cartSlise';
import { UnionProduct } from '../../utils/types/UnionProduct';
import { addToFavorites } from '../../app/slices/favoritesSlice';

type Props = {
  size?: Exclude<ButtonSize, ButtonSize.Small>;
  item?: UnionProduct;
};

export const ProductActions: React.FC<Props> = ({
  size = ButtonSize.Default,
  item,
}) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    if (item) {
      dispatch(addToCart(item));
    }
  };
  const handleAddToFavorites = () => {
    if (item) {
      dispatch(addToFavorites(item));
    }
  };
  return (
    <div className={styles['product-actions-block']}>
      <MainButton label="Add to cart" size={size} onClick={handleAddToCart} />
      <FavoriteButton
        size={size}
        onClick={handleAddToFavorites}
        productId={item!.id}
      />
    </div>
  );
};
