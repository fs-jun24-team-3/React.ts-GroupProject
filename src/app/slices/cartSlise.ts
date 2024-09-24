import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CartItems } from '../../utils/types/CartItem';
import { UnionProduct } from '../../utils/types/UnionProduct';

interface CartState {
  cartItems: CartItems[];
}

const initialState: CartState = {
  cartItems: JSON.parse(localStorage.getItem('cart') || '[]'),
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<UnionProduct>) => {
      const existingItem = state.cartItems.find(
        cartItem => cartItem.item.id === action.payload.id,
      );

      if (existingItem) {
        existingItem.count += 1; // Якщо товар вже є, збільшуємо його кількість
      } else {
        state.cartItems.push({ item: action.payload, count: 1 }); // Якщо товар новий, додаємо з кількістю 1
      }

      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cartItems = state.cartItems.filter(
        cartItem => cartItem.item.id !== action.payload,
      );
      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },
    increaseQuantity: (state, action: PayloadAction<string>) => {
      const existingItem = state.cartItems.find(
        cartItem => cartItem.item.id === action.payload,
      );

      if (existingItem) {
        existingItem.count += 1;
      }

      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },
    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const existingItem = state.cartItems.find(
        cartItem => cartItem.item.id === action.payload,
      );

      if (existingItem && existingItem.count > 1) {
        existingItem.count -= 1;
      } else {
        state.cartItems = state.cartItems.filter(
          cartItem => cartItem.item.id !== action.payload,
        );
      }

      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },
    clearCart: state => {
      state.cartItems = [];
      localStorage.removeItem('cart');
    },
  },
  selectors: {
    totalCost: (state: CartState) => {
      return state.cartItems.reduce((total, cartItem) => {
        return total + cartItem.item.priceRegular * cartItem.count;
      }, 0);
    },
    totalQuentity: (state: CartState) => {
      return state.cartItems.reduce((total, cartItem) => {
        return total + cartItem.item.priceRegular * cartItem.count;
      }, 0);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;

export const selectTotalCost = (state: CartState) =>
  state.cartItems.reduce(
    (total, cartItem) => total + cartItem.item.priceRegular * cartItem.count,
    0,
  );

export const selectTotalQuentity = (state: CartState) =>
  state.cartItems.reduce((total, cartItem) => total + cartItem.count, 0);
