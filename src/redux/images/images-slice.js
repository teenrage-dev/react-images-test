import { createSlice, combineReducers } from '@reduxjs/toolkit';
import { fetchImages, fetchImageById } from './images-operation';

const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
  extraReducers: {
    [fetchImages.fulfilled]: (_, { payload }) => payload,
    [fetchImageById.fulfilled]: (_, { payload }) => payload,
  },
});

const loadingSlice = createSlice({
  name: 'loading',
  initialState: false,
  extraReducers: {
    [fetchImages.pending]: () => true,
    [fetchImages.fulfilled]: () => false,
    [fetchImages.rejected]: () => false,
    [fetchImageById.pending]: () => true,
    [fetchImageById.fulfilled]: () => false,
    [fetchImageById.rejected]: () => false,
  },
});

const errorSlice = createSlice({
  name: 'error',
  initialState: null,
  extraReducers: {
    [fetchImages.pending]: () => null,
    [fetchImages.rejected]: (_, { payload }) => payload,
    [fetchImageById.pending]: () => null,
    [fetchImageById.rejected]: (_, { payload }) => payload,
  },
});

const imagesReducer = combineReducers({
  items: itemsSlice.reducer,
  loading: loadingSlice.reducer,
  error: errorSlice.reducer,
});
export default imagesReducer;
