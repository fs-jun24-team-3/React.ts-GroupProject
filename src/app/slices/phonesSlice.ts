import { PayloadAction, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Phone } from '../../utils/types/Phone';
import { getPhones } from '../../api/api';

interface PhonesState {
  phones: Phone[];
  isPhonesLoading: boolean;
  errorOnPhones: string;
}

const initialState: PhonesState = {
  phones: [],
  isPhonesLoading: false,
  errorOnPhones: '',
};

export const loadPhones = createAsyncThunk('phones/loadPhones', () =>
  getPhones(),
);

export const phonesSlice = createSlice({
  name: 'phones',
  initialState: initialState,
  reducers: {
    setPhones: (state, action: PayloadAction<Phone[]>) => {
      state.phones = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(loadPhones.pending, state => {
      state.isPhonesLoading = true;
    });
    builder.addCase(
      loadPhones.fulfilled,
      (state, action: PayloadAction<Phone[]>) => {
        state.phones = action.payload;
        state.isPhonesLoading = false;
      },
    );
    builder.addCase(loadPhones.rejected, state => {
      state.errorOnPhones = 'error with phones loading';
      state.isPhonesLoading = false;
    });
  },
});

export const { setPhones } = phonesSlice.actions;
