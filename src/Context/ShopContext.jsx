import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < 300+1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [all_product, setAll_Produc] = useState([])
    const [cartItems, setCartitems] = useState(getDefaultCart);

    useEffect(() => {
        fetch('http://localhost:4000/api/products/allproducts').then((resp) =>resp.json()).then((data)=> setAll_Produc(data));

        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/api/products/getcart', {
                method: 'POST',
                headers:{
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'apllication/json',
                },
                body: '',
            }).then((resp) => resp.json()).then((data)=>setCartitems(data));
        }
    },[])
    
    const addToCart = (itemId) => {
        setCartitems((prev) =>({...prev, [itemId]:prev[itemId]+1}))
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/api/products/addtocart',{
                method: 'POST',
                headers:{
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({'itemId':itemId}),
            })
            .then((resp) => resp.json()).then((data)=> console.log(data))
        }
    }
    
    const removeFromCart = (itemId) => {
        setCartitems((prev) =>({...prev, [itemId]:prev[itemId]-1}))
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/api/products/removefromcart',{
                method: 'POST',
                headers:{
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({'itemId':itemId}),
            })
            .then((resp) => resp.json()).then((data)=> console.log(data))
        }
    }

    const removeAllFromCart = () => {
        setCartitems(getDefaultCart());
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/api/products/removeallfromcart',{
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                body: '',
            })
            .then((resp) => resp.json())
            .then((data) => console.log(data));
        }
    }



    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let itemInfo = all_product.find((product) => product.id===Number(item))
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount
    }

    const getTotalCartItems = () => {
        let totalItem = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0) 
            {
                totalItem+= cartItems[item]
            }
        }
        return totalItem
    }
    
    const contextValue = {all_product, cartItems, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems, removeAllFromCart};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;