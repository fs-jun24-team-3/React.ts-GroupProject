import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Product } from '../../utils/types/Product';
import { getProducts } from '../../api/api';

interface ProductsState {
  products: Product[];
  isProductsLoading: boolean;
  errorOnProducts: string;
}

const initialState: ProductsState = {
  products: [],
  isProductsLoading: false,
  errorOnProducts: '',
};

export const loadProducts = createAsyncThunk('products/loadProducts', () =>
  getProducts(),
);

export const productsSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(loadProducts.pending, state => {
      state.isProductsLoading = true;
    });
    builder.addCase(
      loadProducts.fulfilled,
      (state, action: PayloadAction<Product[]>) => {
        state.products = action.payload;
        state.isProductsLoading = false;
      },
    );
    builder.addCase(loadProducts.rejected, state => {
      state.errorOnProducts = 'error with products loading';
      state.isProductsLoading = false;
    });
  },
});

export const { setProducts } = productsSlice.actions;
