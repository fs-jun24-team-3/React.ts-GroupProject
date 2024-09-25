import { Catalog } from '../../components/Catalog/Catalog';
// import styles from './FavoritesPage.module.scss';
import { useAppSelector } from '../../app/reduxHooks';
import { RootState } from '../../app/store';
import { Breadcrumbs } from '../../components/Breadcrumbs';

export const FavoritesPage = () => {
  //в цій компоненті я передію не данні favorites, а данні accessories(це заглушка).
  //Нікіта, коли ти зробиш редакс для цієї компоненти, поєднаєш його з локальним хранилищем, зміни цю змінну.
  const favorites = useAppSelector((state: RootState) => state.favorites);

  return (
    <>
      <Breadcrumbs />
      <Catalog
        items={favorites.favoriteItems}
        title={'Favorites'}
        isFiltered={false}
      />
    </>
  );
};
