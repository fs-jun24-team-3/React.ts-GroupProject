import React from 'react';
import styles from './TechSpecs.module.scss';

type Props = {
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  capacity: string;
  cell: string[];
  camera: string | null;
  zoom: string | null;
};

export const TechSpecs: React.FC<Props> = () => {
  return <div className={styles['tech-specs-block']}>Tech specs</div>;
};
