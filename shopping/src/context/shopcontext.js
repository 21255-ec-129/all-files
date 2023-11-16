import all_product from '../components/Assets/all_product'
import React, { createContext, useState } from 'react' 
import Item from '../components/items/item';
import Product from '../pages/product';

export const ShopContext=createContext(null);
const getDefaultcart=()=>{
let cart={};
for (let index=0;index<all_product.length;index++){
    cart[index]=0;
}
return cart
}

const ShopContextProvider=(props)=>{
    const [cartItems,setcartItems]=useState(getDefaultcart());
    
    // console.log(cartItems);
const addTocart=(itemId)=>{
    setcartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    console.log(cartItems)
}
const removeFromcart=(itemId)=>{
    setcartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
}
const getTotalCartAmount=()=>{
    let totalAmount=0;
    for (const item in cartItems)
    {
        if(cartItems[item]>0)
        {
            let itemInfo=all_product.find((Product)=>Product.id===Number(item))
                totalAmount+= itemInfo.new_price*cartItems[item];
        }
        return totalAmount;
    }
}
const getTotalCartItems=()=>{
    let totalItem=0
    for(const item in cartItems)
    {
        if(cartItems[item]>0){
            totalItem+=cartItems[item]
        }
    }
    return totalItem;

}
const contextValue={getTotalCartItems,getTotalCartAmount,all_product,cartItems,addTocart,removeFromcart}
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>

    )
}
export default ShopContextProvider;