import React from 'react';
import './MainPage.scss';
import { Main } from '../../components/Main';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {};

export const MainPage: React.FC<Props> = () => {
  return (
    <div className="main-page">
      <Main />
    </div>
  );
};
