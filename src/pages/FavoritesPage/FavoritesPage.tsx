import { Catalog } from '../../components/Catalog/Catalog';
// import styles from './FavoritesPage.module.scss';
import { useAppSelector } from '../../app/reduxHooks';
import { RootState } from '../../app/store';

export const FavoritesPage = () => {
  //в цій компоненті я передію не данні favorites, а данні accessories(це заглушка).
  //Нікіта, коли ти зробиш редакс для цієї компоненти, поєднаєш його з локальним хранилищем, зміни цю змінну.
  const favorites = useAppSelector(
    (state: RootState) => state.accessories.accessories,
  );

  return (
    <>
      <Catalog items={favorites} title={'Favorites'} isFiltered={false} />
    </>
  );
};
