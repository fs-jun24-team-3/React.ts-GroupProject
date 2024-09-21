import React from 'react';
import styles from './Breadcrumbs.module.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {};

export const Breadcrumbs: React.FC<Props> = () => {
  return (
    <div className={styles.breadcrumbs}>
      Home {'>'} Phones {'>'} Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
    </div>
  );
};
