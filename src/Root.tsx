import { StrictMode } from 'react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { NotFoundPage } from './pages/NotFoundPage';

export const Root = () => {
  return (
    <StrictMode>
      <Provider store={store}>
        <HashRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </HashRouter>
      </Provider>
    </StrictMode>
  );
};
