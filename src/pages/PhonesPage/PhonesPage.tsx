import React, { useEffect } from 'react';
import { loadPhones } from '../../app/slices/phonesSlice';

import { RootState } from '../../app/store';
import { useAppDispatch, useAppSelector } from '../../app/reduxHooks';
import { Catalog } from '../../components/Catalog/Catalog';
import { Loading } from '../../components/Loading';
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {};

export const PhonesPage: React.FC<Props> = () => {
  const dispatch = useAppDispatch();
  const { phones, loading } = useAppSelector((state: RootState) => ({
    phones: state.phones.phones,
    loading: state.phones.isPhonesLoading,
  }));

  useEffect(() => {
    dispatch(loadPhones());
    document.title = 'Phones';
  }, [dispatch]);

  if (loading || !phones.length) {
    return <Loading />;
  }

  return <Catalog items={phones} title={'Mobile phones'} isFiltered={true} />;
};
