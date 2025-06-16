import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import  counterSlice from '../feature/counter/counterSlice'
import  cartSlice  from '../feature/cart/cartSlice'
// ...
const store = configureStore({
  reducer: {
    counter: counterSlice,
    cart:cartSlice
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>() 
export default store


