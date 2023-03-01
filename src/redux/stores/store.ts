import { configureStore } from '@reduxjs/toolkit';
import BasketSlice from '../reducers/shopReducer';

export const store = configureStore({
  reducer: {
    products: BasketSlice,
  },
});

console.log(store.getState());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
