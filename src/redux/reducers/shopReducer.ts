import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { ProductType, BasketState } from '../../types/commonTypes';

const initialState: BasketState = {
  products: [],
};

export const BasketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<ProductType[]>) => {
      console.log('action.payload', action.payload);
      console.log('state', state);
      action.payload.forEach((prod: ProductType) => {
        state.products.push(prod);
      });
    },
    add: (state, action: PayloadAction<ProductType>) => {
      const newState: BasketState = { ...state };
      newState.products.push(action.payload);
      return newState;
    },

    remove: (state, action: PayloadAction<ProductType>) => {
      const newState: BasketState = { ...state };
      newState.products.filter((prod) => prod.id !== action.payload.id);
      return newState;
    },
  },
});

export const { set, add, remove } = BasketSlice.actions;

export default BasketSlice.reducer;

/*
    count: (state) => {
      const totalPrice = state.products.reduce((acc, prod) => {
        acc += prod.price;
        return acc;
      }, 0);
      const newState = { ...state };
      newState.
      return newState;
    },
*/
