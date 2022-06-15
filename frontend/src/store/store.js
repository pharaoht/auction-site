import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../stateslices/userState';

export const store = configureStore({ reducer: userSlice.reducer });