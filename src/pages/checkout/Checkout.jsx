import React, {useContext, useEffect, useState} from 'react'
import { CartContext } from '../../context/cartContex'
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import './checkout.styles.scss';

const Checkout = () => {
    const { cartItems } = useContext(CartContext)
    const [total, setTotal]=useState(0)
    useEffect(()=>{
      let totalPrice= 0;
      cartItems.map(item => totalPrice = totalPrice + item.price)
      setTotal(totalPrice)
    
    }, [cartItems])

    return (
        <div className='checkout-page'>
       
        <div className='checkout-header'>
          <div className='header-block'>
            <span>Product</span>
          </div>
          <div className='header-block'>
            <span>Title</span>
          </div>
          <div className='header-block'>
            <span>Price</span>
          </div>
          <div className='header-block'>
            <span>Remove</span>
          </div>
        </div>
        {cartItems.map(cartItem => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <div className='total'>TOTAL: {total}</div>
        <div className='test-warning'>
          *Please use the following test credit card for payments*
          <br />
          4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
        </div>
        <button>Stripe button</button>
      </div>
    )
}

export default Checkout










