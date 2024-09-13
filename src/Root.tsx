import { StrictMode } from 'react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { HashRouter, Routes, Route } from 'react-router-dom';

export const Root = () => {
  return (
    <StrictMode>
      <Provider store={store}>
        <HashRouter>
          <Routes>
            <Route path="/" element={<App />}></Route>
          </Routes>
        </HashRouter>
      </Provider>
    </StrictMode>
  );
};
