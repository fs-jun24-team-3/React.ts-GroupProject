import React, { useEffect, useMemo } from 'react';
import './Main.scss';
import { MainBannerSlider } from './MainBannerSlider';
// import { GoodsSlider } from './GoodsSlider';
import { CategoriesList } from './CategoriesList';
import { GoodsSlider } from './GoodsSlider';
import { loadPhones } from '../../app/slices/phonesSlice';
import { useAppDispatch, useAppSelector } from '../../app/reduxHooks';
import { Phone } from '../../utils/types/Phone';
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {};

function sortByHighDiscounts(phones: Phone[]) {
  return [...phones].sort((p1, p2) => p2.priceDiscount - p1.priceDiscount);
}

export const Main: React.FC<Props> = () => {
  const dispatch = useAppDispatch();
  const { phones } = useAppSelector(state => state.phones);
  const phonesWithHighestDiscounts = useMemo(() => {
    return sortByHighDiscounts(phones);
  }, [phones]);

  useEffect(() => {
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
          sliderTitle={'HotPrices'}
          productsList={phonesWithHighestDiscounts}
        />
      </div>
    </>
  );
};
