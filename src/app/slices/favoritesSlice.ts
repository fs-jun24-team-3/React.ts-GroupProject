import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UnionProduct } from '../../utils/types/UnionProduct';

interface FavoriteState {
  favoriteItems: UnionProduct[];
  count: number;
}

const initialState: FavoriteState = {
  favoriteItems: JSON.parse(localStorage.getItem('favorites') || '[]'),
  count: JSON.parse(localStorage.getItem('favCount') || '0'),
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<UnionProduct>) => {
      console.log(state.favoriteItems);
      const favItem = state.favoriteItems.find(
        favItem => favItem.id === action.payload.id,
      );

      if (favItem !== undefined) {
        state.favoriteItems = state.favoriteItems.filter(
          favItem => favItem.id !== action.payload.id,
        );
        state.count -= 1;
      } else {
        state.favoriteItems.push(action.payload);
        state.count += 1;
      }

      localStorage.setItem('favCount', JSON.stringify(state.count));
      localStorage.setItem('favorites', JSON.stringify(state.favoriteItems));
    },
    // removeFromFavorites: (state, action: PayloadAction<FavoriteItem>) => {},
    // increaseQuantity: (state, action: PayloadAction<FavoriteItem>) => {},
    // decreaseQuantity: (state, action: PayloadAction<FavoriteItem>) => {},
  },
});

export const { addToFavorites } = favoritesSlice.actions;
