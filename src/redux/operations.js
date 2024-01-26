import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://63d893c074f386d4efda5afb.mockapi.io';

const errorMessage =
  'WARNING! Our backend is currently undergoing technical work to improve the system. The work is expected to be completed within the next two hours. During this period, temporary inconveniences may occur when using the service. We apologize for the temporary inconvenience and thank you for your understanding.';

export const getAllCars = createAsyncThunk(
  'cars/getCars',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/cars');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);
