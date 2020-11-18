import React, { createContext, useState } from 'react';
export const CartContext = createContext();

const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const addCartItem = (id, title, image, price) => {
    setCartItems([...cartItems, {id, title, image, price }])
  };
  
  const removeCartItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  }
  
  return (
    <CartContext.Provider value={{ cartItems, addCartItem, removeCartItem }}>
      {props.children}
    </CartContext.Provider>
  );
}
 
export default CartContextProvider;