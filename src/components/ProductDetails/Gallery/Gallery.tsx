import React from 'react';
import styles from './Gallery.module.scss';

type Props = { images: string[] };

export const Gallery: React.FC<Props> = () => {
  return <div className={styles['gallery-block']}>Gallery</div>;
};
