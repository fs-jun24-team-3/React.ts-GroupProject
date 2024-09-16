import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Accessory } from '../../utils/types/Accessory';

const initialState = null as Accessory[] | null;

export const accessoriesSlice = createSlice({
  name: 'accessories',
  initialState: initialState,
  reducers: {
    setAccessories: (_, action: PayloadAction<Accessory[]>) => action.payload,
  },
});

export const accessoriesActions = accessoriesSlice.actions;
