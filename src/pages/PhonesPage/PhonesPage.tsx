import React, { useEffect } from 'react';
import { loadPhones } from '../../app/slices/phonesSlice';

import { RootState } from '../../app/store';
import { useAppDispatch, useAppSelector } from '../../app/reduxHooks';
import { Catalog } from '../../components/Catalog/Catalog';
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {};

export const PhonesPage: React.FC<Props> = () => {
  const dispatch = useAppDispatch();
  const phones = useAppSelector((state: RootState) => state.phones.phones);

  useEffect(() => {
    dispatch(loadPhones());
  }, [dispatch]);

  return (
    <>
      <Catalog items={phones} title={'Mobile phones'} isFiltered={true} />
    </>
  );
};
