import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { addItemToShoppingCart } from '../../utils/function';
export interface IProduct {
    id:number;
    title:string;
    price:number;
    img:string;
    qty:number
}
export interface CounterState {
  cartItem:IProduct[];
}

export const initialState: CounterState = {
cartItem:[]
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
addItemToCart:(state,action:PayloadAction<IProduct>)=>{
    state.cartItem = addItemToShoppingCart(state.cartItem,action.payload);
    console.log(state.cartItem);
  },
},
}
)

export const {addItemToCart} = cartSlice.actions;
export default cartSlice.reducer;