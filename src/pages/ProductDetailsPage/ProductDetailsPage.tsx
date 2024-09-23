import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import styles from './ProductDetailsPage.module.scss';
import { getAccessories, getPhones, getTablets } from '../../api/api';

import { Loading } from '../../components/Loading';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { About } from '../../components/ProductDetails/About';
import { GoodsSlider } from '../../components/Main/GoodsSlider';
import { Gallery } from '../../components/ProductDetails/Gallery';
import { TechSpecs } from '../../components/ProductDetails/TechSpecs';
import { VariantsActions } from '../../components/ProductDetails/VariantsActions';
import { UnionProduct } from '../../utils/types/UnionProduct';
import { ProductCategory } from '../../utils/types/ProductCategory';
import { useAppDispatch, useAppSelector } from '../../app/reduxHooks';
import { loadAccessories } from '../../app/slices/accessoriesSlice';
import { loadPhones } from '../../app/slices/phonesSlice';
import { loadTablets } from '../../app/slices/tabletsSlice';

export const ProductDetailsPage = () => {
  const [product, setProduct] = useState<UnionProduct | null>(null);
  const [currentProductList, setCurrentProductList] = useState<UnionProduct[]>(
    [],
  );
  const dispatch = useAppDispatch();
  const { phones, tablets, accessories } = useAppSelector(state => state);
  const phonesList = phones.phones;
  const tabletsList = tablets.tablets;
  const accessoriesList = accessories.accessories;
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const { pathname } = useLocation();
  const { productId } = useParams() as { productId: string };
  const hasBackButton = window.history.length > 1;

  const getProduct = useMemo(() => {
    switch (true) {
      case pathname.includes('/phones/'):
        dispatch(loadPhones());
        setCurrentProductList(phonesList.slice(0, 20));

        return getPhones;
      case pathname.includes('/tablets/'):
        dispatch(loadTablets());
        setCurrentProductList(tabletsList.slice(0, 20));

        return getTablets;
      case pathname.includes('/accessories/'):
        dispatch(loadAccessories());
        setCurrentProductList(accessoriesList.slice(0, 20));

        return getAccessories;
      default:
        return getPhones;
    }
  }, [pathname]);

  const navigate = useNavigate();

  useEffect(() => {
    getProduct()
      .then(products => {
        const data = products.find(product => product.id === productId);

        if (data) {
          document.title = data.name;
          setProduct(data);
        } else {
          setError('Product was not found');
        }
      })
      .catch(() => {
        setError('Please try again later');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [setIsLoading, setProduct, productId]);

  if (isLoading) {
    return (
      <div className={styles['loading-wrapper']}>
        <Loading />
      </div>
    );
  }

  if (!product) {
    return (
      <div className={styles.container}>
        <h2>{error}</h2>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Breadcrumbs pageTitle={product.name} />
      {hasBackButton && (
        <div className="cart__rout">
          <div className="cart__rout__img"></div>
          <div className="cart__rout__name" onClick={() => navigate(-1)}>
            Back
          </div>
        </div>
      )}

      <div className={styles['product-content']}>
        <h2 className={styles['product-content__title']}>{product.name} </h2>

        <div className={styles['product-content__details']}>
          <div className={styles['product-content__details--gallery']}>
            <Gallery images={product.images} />
          </div>
          <div className={styles['product-content__details--variants']}>
            <VariantsActions
              capacityAvailable={product.capacityAvailable}
              colorsAvailable={product.colorsAvailable}
              priceRegular={product.priceRegular}
              priceDiscount={product.priceDiscount}
              screen={product.screen}
              resolution={product.resolution}
              processor={product.processor}
              ram={product.ram}
              capacity={product.capacity}
              color={product.color}
              namespaceId={product.namespaceId}
            />
          </div>
          <div className={styles['product-content__details--description']}>
            <About description={product.description} />
          </div>
          <div className={styles['product-content__details--tech-specs']}>
            <TechSpecs
              screen={product.screen}
              resolution={product.resolution}
              processor={product.processor}
              ram={product.ram}
              capacity={product.capacity}
              cell={product.cell}
              camera={
                product.category !== ProductCategory.Accessory
                  ? product.camera
                  : null
              }
              zoom={
                product.category !== ProductCategory.Accessory
                  ? product.zoom
                  : null
              }
            />
          </div>
        </div>
      </div>

      <GoodsSlider
        sliderTitle="You may also like"
        productsList={currentProductList}
      />
    </div>
  );
};
