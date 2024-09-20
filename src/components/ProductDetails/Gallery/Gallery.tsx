import React from 'react';
import styles from './Gallery.module.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {};

export const Gallery: React.FC<Props> = () => {
  return <div className={styles['gallery-block']}>Gallery</div>;
};
