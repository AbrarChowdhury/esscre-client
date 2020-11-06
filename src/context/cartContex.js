import React, { createContext, useState } from 'react';


export const CartContext = createContext();

const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([
    {name: 'name of the wind', imageUrl: 'patrick rothfuss', price: 1},
    {name: 'the final empire', imageUrl: 'brandon sanderson', price: 2},
  ]);

  const addCartItem = (name, imageUrl, price) => {
    setCartItems([...cartItems, { name, imageUrl, price }]);
  };

  const removeCartItem = (name) => {
    setCartItems(cartItems.filter(item => item.name !== name));
  }

  return (
    <CartContext.Provider value={{ cartItems, addCartItem, removeCartItem }}>
      {props.children}
    </CartContext.Provider>
  );
}
 
export default CartContextProvider;