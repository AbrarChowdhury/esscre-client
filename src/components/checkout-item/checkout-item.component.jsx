import React, { useContext } from 'react';
import { CartContext } from '../../context/cartContex';


import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {
  const { id, title, image, price } = cartItem;
  const { removeCartItem } = useContext(CartContext);
  const handleRemove = ()=>{
    removeCartItem(id)
  }
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={image} alt='item' />
      </div>
      <span className='name'>{title}</span>
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
