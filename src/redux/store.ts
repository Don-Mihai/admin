import { configureStore } from '@reduxjs/toolkit';
import user from './User/user';
import product from './Product/product';

export const store = configureStore({
  reducer: {
    user,
    product
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
