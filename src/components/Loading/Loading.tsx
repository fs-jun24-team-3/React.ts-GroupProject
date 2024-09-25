import React from 'react';
import styles from './Loading.module.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {};

export const Loading: React.FC<Props> = () => {
  return (
    <div className={styles['loader-block']}>
      <span className={styles['loader-block__element']}></span>
    </div>
  );
};
