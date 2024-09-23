import React from 'react';
import styles from './TechSpecs.module.scss';

type Props = {
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  capacity: string;
  cell: string[];
  camera: string | null;
  zoom: string | null;
};

export const TechSpecs: React.FC<Props> = ({
  screen,
  resolution,
  processor,
  ram,
  capacity,
  cell,
  camera,
  zoom,
}) => {
  return (
    <div className={styles.section}>
      <section className={styles.techSpecsSection}>
        <h3 className={styles.sectionTitle}>Tech specs</h3>
        <div className={styles.divider}></div>

        <ul className={styles.specsList}>
          <li className={styles.specs}>
            <strong className={styles.specsKey}>Screen</strong>
            <span className={styles.specsValue}>{screen}</span>
          </li>

          <li className={styles.specs}>
            <strong className={styles.specsKey}>Resolution</strong>
            <span className={styles.specsValue}>{resolution}</span>
          </li>

          <li className={styles.specs}>
            <strong className={styles.specsKey}>Processor</strong>
            <span className={styles.specsValue}>{processor}</span>
          </li>

          <li className={styles.specs}>
            <strong className={styles.specsKey}>Ram</strong>
            <span className={styles.specsValue}>{ram}</span>
          </li>

          <li className={styles.specs}>
            <strong className={styles.specsKey}>Built in memory</strong>
            <span className={styles.specsValue}>{capacity}</span>
          </li>

          {camera && (
            <li className={styles.specs}>
              <strong className={styles.specsKey}>Camera</strong>
              <span className={styles.specsValue}>{camera}</span>
            </li>
          )}

          {zoom && (
            <li className={styles.specs}>
              <strong className={styles.specsKey}>Zoom</strong>
              <span className={styles.specsValue}>{zoom}</span>
            </li>
          )}

          <li className={styles.specs}>
            <strong className={styles.specsKey}>Cell</strong>
            <span className={styles.specsValue}>{cell.join(' ')}</span>
          </li>
        </ul>
      </section>
    </div>
  );
};
