import React from 'react';
import styles from './About.module.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {};

export const About: React.FC<Props> = () => {
  return <div className={styles['about-block']}>About</div>;
};
