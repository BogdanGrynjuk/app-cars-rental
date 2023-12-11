import { createSlice } from '@reduxjs/toolkit';
import { getAllCars } from './operations';

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handlePending = state => {
  state.isLoading = true;
};

const initialState = {
  allCars: [],
  isLoading: false,
  error: null,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getAllCars.pending, handlePending)
      .addCase(getAllCars.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.allCars = payload;
      })
      .addCase(getAllCars.rejected, handleRejected);
  },
});

export const carsReducer = carsSlice.reducer;
