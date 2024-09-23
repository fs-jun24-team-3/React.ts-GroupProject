import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Accessory } from '../../utils/types/Accessory';
import { Phone } from '../../utils/types/Phone';
import { Tablet } from '../../utils/types/Tablet';

interface CartState {
  cartItems: (Phone | Accessory | Tablet)[];
}

const initialState: CartState = {
  cartItems: JSON.parse(localStorage.getItem('cart') || '[]'),
};

// Створюємо слайс для корзини
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Phone | Accessory | Tablet>) => {
      state.cartItems.push(action.payload);
      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cartItems = state.cartItems.filter(
        item => String(item.id) !== action.payload,
      );
      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },
    clearCart: state => {
      state.cartItems = [];
      localStorage.removeItem('cart');
    },
  },
});

// Експортуємо ред'юсер та дії
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
