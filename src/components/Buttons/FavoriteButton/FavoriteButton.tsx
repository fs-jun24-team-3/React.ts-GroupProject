import heart from '../../../img/headerIcon/like.png';
import heartSelected from '../../../img/heartOnClick.png';
import React from 'react';
import { ButtonWithImage } from '../ButtonWithImage';
import { ButtonSize } from '../../../utils/types/ButtonSize';
import { useAppSelector } from '../../../app/reduxHooks';

type Props = {
  size: ButtonSize;
  productId: string;
  onClick: () => void;
};

export const FavoriteButton: React.FC<Props> = ({
  size,
  productId,
  onClick,
}) => {
  const { favoriteItems } = useAppSelector(state => state.favorites);
  const isSelected = favoriteItems.some(favItem => favItem.id === productId);

  return (
    <ButtonWithImage
      onClick={() => {
        onClick();
      }}
      size={size}
      path={isSelected ? heartSelected : heart}
      isSelected={isSelected}
    />
  );
};
