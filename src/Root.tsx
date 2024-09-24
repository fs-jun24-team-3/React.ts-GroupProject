import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import App from './App';
import { MainPage } from './pages/MainPage';

import { ProductDetailsPage } from './pages/ProductDetailsPage/';
import { TabletsPage } from './pages/TabletspPage/TabletsPage';
import { AccessoriesPage } from './pages/AccessoriesPage/AccessoriesPage';
import { CartPage } from './pages/CartPage/CartPage';

import { NotFoundPage } from './pages/NotFoundPage';
import { PhonesPage } from './pages/PhonesPage/PhonesPage';
import { FavoritesPage } from './pages/FavoritesPage';
import { UserPage } from './pages/UserPage/UserPage';

export const Root = () => {
  return (
    <StrictMode>
      <Provider store={store}>
        <HashRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<MainPage />} />
              <Route path="home" element={<Navigate to="/" replace />} />

              <Route path="phones">
                <Route index element={<PhonesPage />} />
                <Route path=":productId" element={<ProductDetailsPage />} />
              </Route>
              <Route path="tablets">
                <Route index element={<TabletsPage />} />
                <Route path=":productId" element={<ProductDetailsPage />} />
              </Route>
              <Route path="accessories">
                <Route index element={<AccessoriesPage />} />
                <Route path=":productId" element={<ProductDetailsPage />} />
              </Route>
              <Route path="favorites" element={<FavoritesPage />} />
              <Route path="cart" element={<CartPage />} />
              <Route path="user" element={<UserPage />} />

              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </HashRouter>
      </Provider>
    </StrictMode>
  );
};
