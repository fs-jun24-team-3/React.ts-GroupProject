import React from 'react';
import styles from './Breadcrumbs.module.scss';

type Props = {
  pageTitle: string;
};

export const Breadcrumbs: React.FC<Props> = () => {
  return (
    <div className={styles.breadcrumbs}>
      Home {'>'} Phones {'>'} Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
    </div>
  );
};
