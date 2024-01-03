import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: {
    brand: '',
    price: '',
    mileage: {
      from: '',
      to: '',
    },
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    updateFilter(state, { payload }) {
      state.filter = { ...state.filter, ...payload };
    },
    resetFilter(state, _) {
      state.filter = { ...state.filter, ...initialState.filter };
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { updateFilter, resetFilter } = filterSlice.actions;
