import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
// import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
// import { MainPage } from './pages/MainPage';
// import { NotFoundPage } from './pages/NotFoundPage';
import App from './App';
import { HashRouter } from 'react-router-dom';

export const Root = () => {
  return (
    <StrictMode>
      <Provider store={store}>
        <HashRouter>
          <App />
        </HashRouter>
      </Provider>
    </StrictMode>
  );
};
