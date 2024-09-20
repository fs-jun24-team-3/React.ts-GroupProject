import React from 'react';
import styles from './About.module.scss';
import { DeviceDescription } from '../../../utils/types/DeviceDescription';

type Props = {
  description: DeviceDescription[];
};

export const About: React.FC<Props> = () => {
  return <div className={styles['about-block']}>About</div>;
};
