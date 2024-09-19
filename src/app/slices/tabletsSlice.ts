import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Tablet } from '../../utils/types/Tablet';
import { getTablets } from '../../api/api';

interface TabletsState {
  tablets: Tablet[];
  isTabletsLoading: boolean;
  errorOnTablets: string;
}

const initialState: TabletsState = {
  tablets: [],
  isTabletsLoading: false,
  errorOnTablets: '',
};

export const loadTablets = createAsyncThunk('tablets/loadTablets', () =>
  getTablets(),
);

export const tabletsSlice = createSlice({
  name: 'tablets',
  initialState: initialState,
  reducers: {
    setTablets: (state, action: PayloadAction<Tablet[]>) => {
      state.tablets = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(loadTablets.pending, state => {
      state.isTabletsLoading = true;
    });
    builder.addCase(
      loadTablets.fulfilled,
      (state, action: PayloadAction<Tablet[]>) => {
        state.tablets = action.payload;
        state.isTabletsLoading = false;
      },
    );
    builder.addCase(loadTablets.rejected, state => {
      state.errorOnTablets = 'error with tablets loading';
      state.isTabletsLoading = false;
    });
  },
});

export const { setTablets } = tabletsSlice.actions;
