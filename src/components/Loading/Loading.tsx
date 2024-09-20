import React from 'react';
import styles from './Loading.module.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {};

export const Loading: React.FC<Props> = () => {
  return <span className={styles.loader}></span>;
};
