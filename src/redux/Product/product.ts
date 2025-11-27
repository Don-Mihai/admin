import { API_URL } from '@/utiles/api';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  product: []
};
export const fetchProduct = createAsyncThunk('user/fetchProduct', async () => {
  try {
    const response = await axios.get(`${API_URL}/products`);
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.error('Ошибка при загрузке товаров:', err);
  }
});

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.product = action.payload;
    });
  }
});

export const {} = productSlice.actions;

export default productSlice.reducer;
