import React, { useEffect } from 'react';
import { Catalog } from '../../components/Catalog/Catalog';
import { useAppDispatch, useAppSelector } from '../../app/reduxHooks';
import { RootState } from '../../app/store';
import { loadTablets } from '../../app/slices/tabletsSlice';
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {};

export const TabletsPage: React.FC<Props> = () => {
  const dispatch = useAppDispatch();
  const tablets = useAppSelector((state: RootState) => state.tablets.tablets);

  useEffect(() => {
    dispatch(loadTablets());
  }, [dispatch]);
  return (
    <>
      <Catalog items={tablets} title={'Tablets'} isFiltered={true} />
    </>
  );
};
