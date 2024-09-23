import React, { useEffect } from 'react';
import { GoodsSlider } from '../GoodsSlider';
import { useAppDispatch, useAppSelector } from '../../../app/reduxHooks';
import { loadPhones } from '../../../app/slices/phonesSlice';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {};

export const HotPricesList: React.FC<Props> = () => {
  const dispatch = useAppDispatch();
  const { phones } = useAppSelector(state => state.phones);

  useEffect(() => {
    dispatch(loadPhones());
  });

  return <GoodsSlider sliderTitle={'Brand new models'} productsList={phones} />;
};
