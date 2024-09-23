import { useEffect, useMemo, useState } from 'react';
import { chooseProductAPI } from '../../../utils/helpers/chooseProductAPI';
import { useLocation } from 'react-router-dom';
import { UnionProduct } from '../../../utils/types/UnionProduct';
import { GoodsSlider } from '../../Main/GoodsSlider';

export const RecommendedList = () => {
  const [currentProductList, setCurrentProductList] = useState<UnionProduct[]>(
    [],
  );
  const { pathname } = useLocation();

  const getProducts = useMemo(() => {
    return chooseProductAPI(pathname);
  }, [pathname]);

  useEffect(() => {
    getProducts().then(products => {
      setCurrentProductList(products);
    });
  }, []);

  return (
    <GoodsSlider
      sliderTitle="You may also like"
      productsList={currentProductList}
    />
  );
};
