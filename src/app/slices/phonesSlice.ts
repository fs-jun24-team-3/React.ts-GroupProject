import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Phone } from '../../utils/types/Phone';

const initialState = null as Phone[] | null;

export const phonesSlice = createSlice({
  name: 'phones',
  initialState: initialState,
  reducers: {
    setPhones: (_, action: PayloadAction<Phone[]>) => action.payload,
  },
});
