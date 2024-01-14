import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filterAllCars: {
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
      state.filterAllCars = { ...state.filterAllCars, ...payload };
    },
    resetFilter(state, _) {
      state.filterAllCars = {
        ...state.filterAllCars,
        ...initialState.filterAllCars,
      };
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { updateFilter, resetFilter } = filterSlice.actions;
