import { API_URL } from '@/utiles/api';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { toast } from 'react-toastify';
import { LocalUserI, LoginFormValuesI, StateI, UserI } from './types';

const initialState: StateI = {
  users: [],
  currentUser: {} as UserI
};

export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
  try {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
  } catch (err) {
    console.error('Ошибка при загрузке пользователей:', err);
  }
});

export const fetchUserById = createAsyncThunk('user/fetchUserById', async (userId: string | null) => {
  try {
    const response = await axios.get(`${API_URL}/users/${userId}`);
    return response.data;
  } catch (err) {
    console.error('Ошибка при загрузке пользователей:', err);
  }
});

export const loginUser = createAsyncThunk('user/loginUser', async (formValues: LoginFormValuesI) => {
  try {
    const response = await axios.get(`${API_URL}/users?email=${formValues.email}&password=${formValues.password}`);
    return response.data[0];
  } catch (err) {
    console.error('Ошибка при загрузке пользователей:', err);
  }
});

export const createUsers = createAsyncThunk('user/createUsers', async (formValues: LocalUserI): Promise<UserI | undefined> => {
  const payload = {
    ...formValues,
    created: formValues.created
  };
  try {
    const response = await axios.post(`${API_URL}/users`, payload);
    return response.data;
  } catch (err) {
    console.error('Ошибка при загрузке пользователей:', err);
  }
});

export const deleteUsers = createAsyncThunk('user/deleteUsers', async (userId: string) => {
  try {
    const response = await axios.delete(`${API_URL}/users/${userId}`);
    return response.data;
  } catch (error) {
    toast.error('Ошибка при удалении пользователя');
    console.error(error);
  }
});

export const editUsers = createAsyncThunk('user/editUsers', async (formValues: UserI) => {
  try {
    const response = await axios.put(`${API_URL}/users/${formValues.id}`, formValues);
    return response.data;
  } catch (err) {
    console.error('Ошибка при редактировании пользователей:', err);
  }
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    builder.addCase(createUsers.fulfilled, (state, action) => {
      if (action.payload) {
        state.users.push(action.payload);
      }
    });
    builder.addCase(deleteUsers.fulfilled, (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload.id);
    });
    builder.addCase(editUsers.fulfilled, (state, action) => {
      state.users = state.users.map((user) => (user.id === action.payload.id ? action.payload : user));
    });
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.currentUser = action.payload;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.currentUser = action.payload;
    });
  }
});

export const {} = userSlice.actions;

export default userSlice.reducer;
