import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { accessoriesSlice } from './slices/accessoriesSlice';
import { phonesSlice } from './slices/phonesSlice';
import { productsSlice } from './slices/productsSlice';
import { tabletsSlice } from './slices/tabletsSlice';
import { cartSlice } from './slices/cartSlise';
import { favoritesSlice } from './slices/favoritesSlice';
import { orderSlice } from './slices/orderSlice';

const rootReducer = combineSlices(
  accessoriesSlice,
  phonesSlice,
  productsSlice,
  tabletsSlice,
  cartSlice,
  favoritesSlice,
  orderSlice,
);

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
