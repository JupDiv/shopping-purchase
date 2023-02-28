import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { getDataFromAPI } from '../../utils/getDatafromApi';
import { useAppDispatch } from '../../utils/hooks';

export interface ProductType {
  description: string;
  id: number;
  category: string;
  image: string;
  price: number;
  raiting: {
    rate: number;
    count: number;
  };
  title: string;
}

type BasketState = {
  products: ProductType[];
};

const initialState: BasketState = {
  products: [],
};

export const BasketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<ProductType[]>) => {
      console.log(action.payload);
      state.products = state.products.concat(action.payload);
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
    // count: (state) => {
    //   const totalPrice = state.products.reduce((acc, prod) => {
    //     acc += prod.price;
    //     return acc;
    //   }, 0);
    //   const newState = { ...state };
    //   newState.totalPrice = totalPrice;
    //   return newState;
    // },
  },
});

export const { add, remove } = BasketSlice.actions;

export default BasketSlice.reducer;
