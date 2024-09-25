import React, { useEffect } from 'react';
import { Catalog } from '../../components/Catalog/Catalog';
import { useAppDispatch, useAppSelector } from '../../app/reduxHooks';
import { RootState } from '../../app/store';
import { loadTablets } from '../../app/slices/tabletsSlice';
import { Loading } from '../../components/Loading';
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {};

export const TabletsPage: React.FC<Props> = () => {
  const dispatch = useAppDispatch();

  const { tablets, loading } = useAppSelector((state: RootState) => ({
    tablets: state.tablets.tablets,
    loading: state.tablets.isTabletsLoading,
  }));

  useEffect(() => {
    dispatch(loadTablets());
    document.title = 'Tablets';
  }, [dispatch]);

  if (loading || !tablets.length) {
    return <Loading />;
  }

  return (
    <>
      <Catalog items={tablets} title={'Tablets'} isFiltered={true} />
    </>
  );
};
