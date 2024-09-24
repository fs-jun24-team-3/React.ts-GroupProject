import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Breadcrumbs.module.scss';
import homeIconSrc from '../../img/icon/Home.png';
import chevronIconSrc from '../../img/arrow/ArrowRight.png';

type BreadcrumbsProps = {
  product?: {
    category: string;
    name: string;
  };
};

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ product }) => {
  const { pathname } = useLocation();

  function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  const getBreadcrumbs = () => {
    if (product) {
      return [
        { path: `/${product.category}`, label: capitalize(product.category) },
        { label: product.name },
      ];
    } else {
      const segments = pathname.split('/').filter(Boolean);

      return segments.map((segment, index, array) => ({
        path: `/${array.slice(0, index + 1).join('/')}`,
        label: capitalize(segment),
      }));
    }
  };

  const breadcrumbs = getBreadcrumbs();

  return (
    <nav className={styles.breadcrumbs}>
      <Link to="/">
        <img
          src={homeIconSrc}
          alt="home"
          className={styles.homeIcon}
          aria-label="Home"
        />
      </Link>
      {breadcrumbs.map((crumb, index) => {
        return (
          <React.Fragment key={index}>
            <p className={styles.chevronSpan}>
              <img
                src={chevronIconSrc}
                alt="chevron"
                className={styles.chevronIcon}
                aria-label="Next"
              />
            </p>
            {crumb.path && index < breadcrumbs.length - 1 ? (
              <Link to={crumb.path} className={styles.label}>
                {crumb.label}
              </Link>
            ) : (
              <p className={styles['label--product']}>{crumb.label}</p>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
