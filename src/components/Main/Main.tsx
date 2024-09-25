import React, { useEffect, useMemo } from 'react';
import './Main.scss';
import { MainBannerSlider } from './MainBannerSlider';
import { CategoriesList } from './CategoriesList';
import { GoodsSlider } from './GoodsSlider';
import { loadPhones } from '../../app/slices/phonesSlice';
import { useAppDispatch, useAppSelector } from '../../app/reduxHooks';
import { sortByHighDiscounts } from '../../utils/helpers/sortByHighDiscounts';
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {};

export const Main: React.FC<Props> = () => {
  const dispatch = useAppDispatch();
  const { phones } = useAppSelector(state => state.phones);
  const phonesWithHighestDiscounts = useMemo(() => {
    return sortByHighDiscounts(phones);
  }, [phones]);

  useEffect(() => {
    document.title = 'Nice Gadgets';
    dispatch(loadPhones());
  }, []);

  return (
    <>
      <h1 className="main__title">Welcome to Nice Gadgets store!</h1>
      <div className="main__content">
        <MainBannerSlider />
        <GoodsSlider sliderTitle={'Brand new models'} productsList={phones} />
        <CategoriesList />
        <GoodsSlider
          sliderTitle={'Hot prices'}
          productsList={phonesWithHighestDiscounts}
        />
      </div>
    </>
  );
};
