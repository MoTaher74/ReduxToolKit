import { createSlice } from '@reduxjs/toolkit'

export interface IProduct {
    id:number;
    title:string;
    price:number;
    img:string;
}
export interface CounterState {
  cartItem:IProduct[];
}

const initialState: CounterState = {
cartItem:[]
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

  },
});

export const {} = cartSlice.actions;
export default cartSlice.reducer;