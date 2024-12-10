import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import quoteReducer from './slices/quoteSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    quotes: quoteReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;