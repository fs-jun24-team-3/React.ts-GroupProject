import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import styles from './FavoritesPage.module.scss';

export const FavoritesPage = () => {
  return (
    <div className={styles.favorites}>
      <Breadcrumbs />
      Favorites
    </div>
  );
};
