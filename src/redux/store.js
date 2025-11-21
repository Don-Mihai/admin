import { configureStore } from '@reduxjs/toolkit';
import counter from './counter';
import user from './user';

export const store = configureStore({
  reducer: {
    counter,
    user
  }
});
