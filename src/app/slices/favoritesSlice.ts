import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UnionProduct } from '../../utils/types/UnionProduct';

interface FavoriteState {
  favoriteItems: UnionProduct[];
}

const initialState: FavoriteState = {
  favoriteItems: JSON.parse(localStorage.getItem('favorites') || '[]'),
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<UnionProduct>) => {
      const favItem = state.favoriteItems.find(
        favItem => favItem.id === action.payload.id,
      );

      if (favItem) {
        state.favoriteItems = state.favoriteItems.filter(
          favItem => favItem.id !== action.payload.id,
        );
      } else {
        state.favoriteItems.push(action.payload);
      }

      localStorage.setItem('favorites', JSON.stringify(state.favoriteItems));
    },
    // increaseQuantity: (state, action: PayloadAction<FavoriteItem>) => {},
    // decreaseQuantity: (state, action: PayloadAction<FavoriteItem>) => {},
  },
});

export const { addToFavorites } = favoritesSlice.actions;
