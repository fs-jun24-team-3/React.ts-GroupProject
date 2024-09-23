import React, { ReactNode } from 'react';
import styles from './VariantsBlock.module.scss';

type Props = {
  title: string;
  children: ReactNode;
};

export const VariantsBlock: React.FC<Props> = ({ title, children }) => {
  return (
    <div className={styles['variants-block']}>
      <h4 className={`${styles['variants-block__title']} small`}>{title}</h4>
      <div className={styles['variants-block__items']}>{children}</div>
    </div>
  );
};
