import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../shared/api/images';

export const fetchImages = createAsyncThunk(
  'images/fetch',
  async (_, thunkAPI) => {
    try {
      const data = await api.getListImages();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchImageById = createAsyncThunk(
  'images/fetchById',
  async (id, thunkAPI) => {
    try {
      const data = await api.getImageById(id);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
