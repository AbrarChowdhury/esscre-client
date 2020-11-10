import React,{ useContext } from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import { useHistory } from 'react-router-dom'
import { CartContext } from '../../context/cartContex'
const CartIcon = () => {
  let history = useHistory()
  const { cartItems } = useContext(CartContext)
  const itemCount =  cartItems.length 
  return (
    <div className='cart-icon' onClick={()=>history.push('/cart')}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
  );
};

export default CartIcon;
