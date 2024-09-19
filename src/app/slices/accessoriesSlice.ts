import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Accessory } from '../../utils/types/Accessory';
import { getAccessories } from '../../api/api';

interface AccessoryState {
  accessories: Accessory[];
  isAccessoryLoading: boolean;
  errorOnAccessories: string;
}

const initialState: AccessoryState = {
  accessories: [],
  isAccessoryLoading: false,
  errorOnAccessories: '',
};

export const loadAccessories = createAsyncThunk(
  'accessories/loadAccessories',
  () => getAccessories(),
);

export const accessoriesSlice = createSlice({
  name: 'accessories',
  initialState: initialState,
  reducers: {
    setAccessories: (state, action: PayloadAction<Accessory[]>) => {
      state.accessories = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(loadAccessories.pending, state => {
      state.isAccessoryLoading = true;
    });
    builder.addCase(
      loadAccessories.fulfilled,
      (state, action: PayloadAction<Accessory[]>) => {
        state.accessories = action.payload;
        state.isAccessoryLoading = false;
      },
    );
    builder.addCase(loadAccessories.rejected, state => {
      state.errorOnAccessories = 'error with accessories loading';
      state.isAccessoryLoading = false;
    });
  },
});

export const { setAccessories } = accessoriesSlice.actions;
