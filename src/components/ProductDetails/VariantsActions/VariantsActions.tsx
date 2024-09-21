import React from 'react';
import styles from './VariantsActions.module.scss';

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
};

export const VariantsActions: React.FC<Props> = () => {
  return <div className={styles['variants-block']}>Variants Actions</div>;
};
