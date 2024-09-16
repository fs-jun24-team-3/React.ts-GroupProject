import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Tablet } from '../../utils/types/Tablet';

const initialState = null as Tablet[] | null;

export const tabletsSlice = createSlice({
  name: 'tablets',
  initialState: initialState,
  reducers: {
    setTablets: (_, action: PayloadAction<Tablet[]>) => action.payload,
  },
});
