import React from 'react';
import './Main.scss';
import { Header } from '../Header';
import { MainBody } from './MainBody';
import { Footer } from '../Footer';
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {};

export const Main: React.FC<Props> = () => {
  return (
    <>
      <Header />
      <MainBody />
      <Footer />
    </>
  );
};
