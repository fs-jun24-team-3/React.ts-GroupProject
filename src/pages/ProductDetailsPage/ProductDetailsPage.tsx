import { useNavigate } from 'react-router-dom';

import styles from './ProductDetailsPage.module.scss';

import { About } from '../../components/ProductDetails/About';
import { Breadcrumbs } from '../../components/ProductDetails/Breadcrumbs';
import { Gallery } from '../../components/ProductDetails/Gallery';
import { TechSpecs } from '../../components/ProductDetails/TechSpecs';
import { GoodsSlider } from '../../components/Main/GoodsSlider';
import { VariantsActions } from '../../components/ProductDetails/VariantsActions';

export const ProductDetailsPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <Breadcrumbs />
      <div>
        <div className="cart__rout">
          <div className="cart__rout__img"></div>
          <div className="cart__rout__name" onClick={() => navigate(-1)}>
            Back
          </div>
        </div>
      </div>

      <div className={styles['product-content']}>
        <h2 className={styles['product-content__title']}>
          Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
        </h2>

        <div className={styles['product-content__details']}>
          <div className={styles['product-content__details--gallery']}>
            <Gallery />
          </div>
          <div className={styles['product-content__details--variants']}>
            <VariantsActions />
          </div>
          <div className={styles['product-content__details--description']}>
            <About />
          </div>
          <div className={styles['product-content__details--tech-specs']}>
            <TechSpecs />
          </div>
        </div>
      </div>

      <GoodsSlider sliderTitle="You may also like" />
    </div>
  );
};
