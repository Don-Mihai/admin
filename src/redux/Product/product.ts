import { API_URL } from '@/utiles/api';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ProductI } from './type';
import { toast } from 'react-toastify';

interface ProductState {
  product: ProductI[];
}

const initialState: ProductState = {
  product: []
};

export interface LocalProductI extends Omit<ProductI, 'id'> {}

export const fetchProduct = createAsyncThunk('product/fetchProduct', async () => {
  try {
    const response = await axios.get(`${API_URL}/products`);
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.error('Ошибка при загрузке товаров:', err);
  }
});

export const createProduct = createAsyncThunk('product/createProduct', async (formValues: LocalProductI): Promise<ProductI | undefined> => {
  try {
    const response = await axios.post(`${API_URL}/products`, formValues);
    toast.success('Товар успешно добавлен');
    return response.data;
  } catch (err) {
    toast.error('Ошибка при добавлении товара');
    console.error('Ошибка при добавлении товара:', err);
  }
});

export const editProduct = createAsyncThunk('product/editProduct', async (formValues: ProductI) => {
  try {
    const response = await axios.put(`${API_URL}/products/${formValues.id}`, formValues);
    toast.success('Товар успешно обновлен');
    return response.data;
  } catch (err) {
    toast.error('Ошибка при обновлении товара');
    console.error('Ошибка при обновлении товара:', err);
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
    builder.addCase(createProduct.fulfilled, (state, action) => {
      if (action.payload) {
        state.product.push(action.payload);
      }
    });
    builder.addCase(editProduct.fulfilled, (state, action) => {
      if (action.payload) {
        state.product = state.product.map((product) => (product.id === action.payload.id ? action.payload : product));
      }
    });
  }
});

export default productSlice.reducer;
