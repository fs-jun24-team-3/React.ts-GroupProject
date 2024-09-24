import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/reduxHooks';
import { RootState } from '../../app/store';
import { loadAccessories } from '../../app/slices/accessoriesSlice';
import { Catalog } from '../../components/Catalog/Catalog';
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {};

export const AccessoriesPage: React.FC<Props> = () => {
  const dispatch = useAppDispatch();
  const accessories = useAppSelector(
    (state: RootState) => state.accessories.accessories,
  );

  useEffect(() => {
    dispatch(loadAccessories());
  }, [dispatch]);
  return (
    <>
      <Catalog items={accessories} title={'Accessories'} isFiltered={true} />
    </>
  );
};
