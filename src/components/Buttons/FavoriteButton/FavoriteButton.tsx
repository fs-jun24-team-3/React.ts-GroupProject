import heart from '../../../img/headerIcon/like.png';
import heartSelected from '../../../img/heartOnClick.png';
import React, { useState } from 'react';
import { ButtonWithImage } from '../ButtonWithImage';
import { ButtonSize } from '../../../utils/types/ButtonSize';

type Props = {
  size: ButtonSize;
};

export const FavoriteButton: React.FC<Props> = ({ size }) => {
  const isDefaultSelected = false;
  const [isSelected, setIsSelected] = useState(isDefaultSelected);

  return (
    <ButtonWithImage
      onClick={() => {
        setIsSelected(!isSelected);
      }}
      size={size}
      path={isSelected ? heartSelected : heart}
      isSelected={isSelected}
    />
  );
};
