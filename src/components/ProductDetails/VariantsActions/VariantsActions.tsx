import React from 'react';
import styles from './VariantsActions.module.scss';
import { Link } from 'react-router-dom';
import { ProductActions } from '../../ProductActions';
import { VariantsBlock } from './components/VariantsBlock';
import { ButtonWithColor } from '../../Buttons/ButtonWithColor';
import { ButtonWithText } from '../../Buttons/ButtonWithText';
import { ProductColor } from '../../../utils/types/ProductColor';
import { ButtonSize } from '../../../utils/types/ButtonSize';
import { ButtonShape } from '../../../utils/types/ButtonShape';
import { UnionProduct } from '../../../utils/types/UnionProduct';

type Props = {
  capacityAvailable: string[];
  colorsAvailable: string[];
  priceRegular: number;
  priceDiscount: number;
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  capacity: string;
  color: string;
  namespaceId: string;
  product: UnionProduct;
};

export const VariantsActions: React.FC<Props> = ({
  colorsAvailable,
  color,
  namespaceId,
  capacity,
  capacityAvailable,
  priceRegular,
  priceDiscount,
  product,
}) => {
  return (
    <div className={styles['variants-block']}>
      <VariantsBlock title="Available colors">
        {colorsAvailable.map(colorItem => {
          return (
            <Link
              key={colorItem}
              to={`../${[namespaceId, capacity, colorItem].join('-').toLowerCase()}`}
            >
              <ButtonWithColor
                size={ButtonSize.Small}
                color={colorItem.replace(' ', '') as ProductColor}
                isSelected={colorItem === color}
              />
            </Link>
          );
        })}
      </VariantsBlock>
      <div className={styles['variants-block__line']} />
      <VariantsBlock title="Select capacity">
        {capacityAvailable.map(capacityItem => {
          return (
            <Link
              key={capacityItem}
              to={`../${[namespaceId, capacityItem, color].join('-').toLowerCase()}`}
            >
              <ButtonWithText
                size={ButtonSize.Small}
                shape={ButtonShape.Rectangle}
                label={capacityItem}
                isSelected={capacityItem === capacity}
              />
            </Link>
          );
        })}
      </VariantsBlock>
      <div className={styles['variants-block__line']} />
      <div className={styles['variants-block__price']}>
        <h2>${priceRegular}</h2>
        <p>${priceDiscount}</p>
      </div>
      <div className="variants-block__actions">
        <ProductActions size={ButtonSize.Large} item={product} />
      </div>
      <div className="variants-block__info"></div>
    </div>
  );
};
