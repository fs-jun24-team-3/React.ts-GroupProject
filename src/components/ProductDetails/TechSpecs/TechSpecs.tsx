import React from 'react';
import styles from './TechSpecs.module.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {};

export const TechSpecs: React.FC<Props> = () => {
  return <div className={styles['tech-specs-block']}>Tech specs</div>;
};
