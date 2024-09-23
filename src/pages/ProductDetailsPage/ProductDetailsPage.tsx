import { useEffect, useMemo, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styles from './ProductDetailsPage.module.scss';
import { Loading } from '../../components/Loading';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { About } from '../../components/ProductDetails/About';
import { GoodsSlider } from '../../components/Main/GoodsSlider';
import { Gallery } from '../../components/ProductDetails/Gallery';
import { TechSpecs } from '../../components/ProductDetails/TechSpecs';
import { VariantsActions } from '../../components/ProductDetails/VariantsActions';
import { UnionProduct } from '../../utils/types/UnionProduct';
import { ProductCategory } from '../../utils/types/ProductCategory';
import { BackButton } from '../../components/Buttons/BackButton';
import { chooseProductAPI } from '../../utils/helpers/chooseProductAPI';

export const ProductDetailsPage = () => {
  const [product, setProduct] = useState<UnionProduct | null>(null);
  const [currentProductList, setCurrentProductList] = useState<UnionProduct[]>(
    [],
  );
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const { pathname } = useLocation();
  const { productId } = useParams() as { productId: string };
  const hasBackButton = window.history.length > 1;

  const getProduct = useMemo(() => {
    return chooseProductAPI(pathname);
  }, [pathname]);

  useEffect(() => {
    getProduct()
      .then(products => {
        const data = products.find(product => product.id === productId);
        setCurrentProductList(products);

        if (data) {
          document.title = data.name;
          setProduct(data);
          window.scrollTo({ top: 0, behavior: 'smooth' });
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
      {hasBackButton && <BackButton />}

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
