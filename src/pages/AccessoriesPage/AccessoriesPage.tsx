import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/reduxHooks';
import { RootState } from '../../app/store';
import { loadAccessories } from '../../app/slices/accessoriesSlice';
import { Catalog } from '../../components/Catalog/Catalog';
import { Loading } from '../../components/Loading';
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {};

export const AccessoriesPage: React.FC<Props> = () => {
  const dispatch = useAppDispatch();

  const { accessories, loading } = useAppSelector((state: RootState) => ({
    accessories: state.accessories.accessories,
    loading: state.accessories.isAccessoryLoading,
  }));

  useEffect(() => {
    dispatch(loadAccessories());
    document.title = 'Accessories';
  }, [dispatch]);

  if (loading || !accessories.length) {
    return <Loading />;
  }

  return (
    <>
      <Catalog items={accessories} title={'Accessories'} isFiltered={true} />
    </>
  );
};
