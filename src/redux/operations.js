import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://63d893c074f386d4efda5afb.mockapi.io';

const errorMessage = 'Something went wrong, please try again later!';

export const getAllCars = createAsyncThunk(
  'cars/getCars',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/cars');
      return response.data;
    } catch (error) {
      console.log(errorMessage);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);
