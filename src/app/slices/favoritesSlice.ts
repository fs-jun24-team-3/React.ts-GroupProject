import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UnionProduct } from '../../utils/types/UnionProduct';

interface FavoriteState {
  favoriteItems: UnionProduct[];
  favCount: number;
}

const initialState: FavoriteState = {
  favoriteItems: JSON.parse(localStorage.getItem('favorites') || '[]'),
  favCount: JSON.parse(localStorage.getItem('favCount') || '0'),
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<UnionProduct>) => {
      const favItem = state.favoriteItems.find(
        favItem => favItem.id === action.payload.id,
      );

      if (favItem !== undefined) {
        state.favoriteItems = state.favoriteItems.filter(
          favItem => favItem.id !== action.payload.id,
        );
        state.favCount -= 1;
      } else {
        state.favoriteItems.push(action.payload);
        state.favCount += 1;
      }

      localStorage.setItem('favCount', JSON.stringify(state.favCount));
      localStorage.setItem('favorites', JSON.stringify(state.favoriteItems));
    },
  },
});

export const { addToFavorites } = favoritesSlice.actions;
