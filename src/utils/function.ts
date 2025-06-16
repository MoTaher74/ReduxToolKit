import type { IProduct } from "../feature/cart/cartSlice"

export const addItemToShoppingCart = (cartItem:IProduct[],product:IProduct)=>{

    const exists = cartItem.find(item => item.id === product.id);
    if(exists){
        return cartItem.map(item => item.id === product.id?{...item,qty:item.qty+1} :item)
    }
    return [...cartItem,{...product,qty:1}]
}