import React, { useContext } from 'react';
import { CartContext } from '../../context/cartContex';


import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price } = cartItem;
  const { removeCartItem } = useContext(CartContext);
  const handleRemove = ()=>{
    removeCartItem(name)
  }
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
      <div
        className='remove-button'
        onClick={handleRemove}
        >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
