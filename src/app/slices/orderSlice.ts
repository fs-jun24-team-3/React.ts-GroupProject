import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItems } from '../../utils/types/CartItem';
import { Order } from '../../utils/types/Order';
import { User } from '../../utils/types/User';

// Тип для замовлення

// Функція для отримання даних корзини з LocalStorage
const getCartItemsFromLocalStorage = (): CartItems[] => {
  const storedCartItems = localStorage.getItem('orderCart');
  return storedCartItems ? JSON.parse(storedCartItems) : [];
};

// Функція для отримання даних користувача з LocalStorage
const getUserFromLocalStorage = (): User | null => {
  const storedUser = localStorage.getItem('userData');
  return storedUser ? JSON.parse(storedUser) : null;
};

// Ініціалізація початкового стану з LocalStorage
const initialState: Order = {
  user: getUserFromLocalStorage(), // Ініціалізація даними з LocalStorage
  cartItems: getCartItemsFromLocalStorage(), // Ініціалізація даними з LocalStorage
  totalPrice: 0,
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addToOrder: (state, action: PayloadAction<CartItems[]>) => {
      action.payload.forEach(newProduct => {
        const existingItem = state.cartItems.find(
          cartItem => cartItem.item.id === newProduct.item.id, // Працюємо через item.id
        );

        if (existingItem) {
          existingItem.count += newProduct.count;
        } else {
          state.cartItems.push(newProduct);
        }
      });

      localStorage.setItem('orderCart', JSON.stringify(state.cartItems));
    },
    removeFromOrder: (state, action: PayloadAction<string>) => {
      // id у вас типу string
      state.cartItems = state.cartItems.filter(
        cartItem => cartItem.item.id !== action.payload, // Працюємо через item.id
      );
      localStorage.setItem('orderCart', JSON.stringify(state.cartItems));
    },
    increaseQuantity: (state, action: PayloadAction<string>) => {
      const existingItem = state.cartItems.find(
        cartItem => cartItem.item.id === action.payload, // Працюємо через item.id
      );

      if (existingItem) {
        existingItem.count += 1;
      }

      localStorage.setItem('orderCart', JSON.stringify(state.cartItems));
    },
    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const existingItem = state.cartItems.find(
        cartItem => cartItem.item.id === action.payload, // Працюємо через item.id
      );

      if (existingItem && existingItem.count > 1) {
        existingItem.count -= 1;
      } else {
        state.cartItems = state.cartItems.filter(
          cartItem => cartItem.item.id !== action.payload, // Працюємо через item.id
        );
      }

      localStorage.setItem('orderCart', JSON.stringify(state.cartItems));
    },
    clearOrder: state => {
      state.cartItems = [];
      localStorage.removeItem('orderCart');
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      localStorage.setItem('userData', JSON.stringify(action.payload));
    },
  },
  selectors: {
    totalCost: (state: Order) => {
      return state.cartItems.reduce((total, cartItem) => {
        return total + cartItem.item.priceRegular * cartItem.count;
      }, 0);
    },
    totalQuantity: (state: Order) => {
      return state.cartItems.reduce((total, cartItem) => {
        return total + cartItem.count;
      }, 0);
    },
  },
});

// Експорт дій для використання в компонентах
export const {
  setUser,
  addToOrder,
  removeFromOrder,
  increaseQuantity,
  decreaseQuantity,
  clearOrder,
} = orderSlice.actions;

export default orderSlice.reducer;
