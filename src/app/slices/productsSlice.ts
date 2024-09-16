import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Product } from '../../utils/types/Product';

const initialState = null as Product[] | null;

export const productsSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {
    setProducts: (_, action: PayloadAction<Product[]>) => action.payload,
  },
});
