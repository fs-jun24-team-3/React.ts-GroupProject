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
  screen,
  resolution,
  namespaceId,
  processor,
  capacity,
  ram,
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
      <div className={styles['variants-block__info']}>
        <ul className={styles['variants-block__info--list']}>
          <li className={styles['variants-block__info--list-item']}>
            <strong className={styles['variants-block__info--title']}>
              Screen
            </strong>
            <span className={styles['variants-block__info--value']}>
              {screen}
            </span>
          </li>

          <li className={styles['variants-block__info--list-item']}>
            <strong className={styles['variants-block__info--title']}>
              Resolution
            </strong>
            <span className={styles['variants-block__info--value']}>
              {resolution}
            </span>
          </li>

          <li className={styles['variants-block__info--list-item']}>
            <strong className={styles['variants-block__info--title']}>
              Processor
            </strong>
            <span className={styles['variants-block__info--value']}>
              {processor}
            </span>
          </li>

          <li className={styles['variants-block__info--list-item']}>
            <strong className={styles['variants-block__info--title']}>
              Ram
            </strong>
            <span className={styles['variants-block__info--value']}>{ram}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
