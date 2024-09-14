import React from 'react';
import { GoodsSlider } from '../GoodsSlider';
import { PhoneCard } from '../PhoneCard';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {};

export const NewModelList: React.FC<Props> = () => {
  return (
      <GoodsSlider sliderTitle={'Brand new models'} />
  );
};
