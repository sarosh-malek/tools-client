import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import userReducer from '../features/user/userSlice';
import pageReducer from '../features/pageSlice';

export const store = configureStore({
  reducer: {
    users: userReducer,
    pages: pageReducer,
  },
  middleware: [thunkMiddleware],
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
