import { MainButton } from '../Buttons/MainButton';
import styles from './ProductActions.module.scss';
import React from 'react';
import { FavoriteButton } from '../Buttons/FavoriteButton';
import { ButtonSize } from '../../utils/types/ButtonSize';

type Props = {
  size?: Exclude<ButtonSize, ButtonSize.Small>;
};

export const ProductActions: React.FC<Props> = ({
  size = ButtonSize.Default,
}) => {
  return (
    <div className={styles['product-actions-block']}>
      <MainButton label="Add to cart" size={size} />
      <FavoriteButton size={size} />
    </div>
  );
};
