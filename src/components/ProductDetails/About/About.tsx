import React from 'react';
import styles from './About.module.scss';
import { DeviceDescription } from '../../../utils/types/DeviceDescription';

type Props = {
  description: DeviceDescription[];
};

export const About: React.FC<Props> = ({ description }) => {
  return (
    <section className={styles.descriptionSection}>
      <h3 className={styles.sectionTitle}>About</h3>
      <div className={styles.divider}></div>

      {description.map((item, index) => (
        <article key={index} className={styles.descriptionSection}>
          <h4 className={styles.descriptionTitle}>{item.title}</h4>
          <p className={styles.descriptionText}>{item.text.join(' ')}</p>
        </article>
      ))}
    </section>
  );
};
