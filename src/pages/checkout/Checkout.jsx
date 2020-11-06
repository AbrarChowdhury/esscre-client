import React, {useContext} from 'react'
import { CartContext } from '../../context/cartContex'
const Checkout = () => {
    const { cartItems } = useContext(CartContext)
    console.log('cartItems: ',cartItems)
    return (
        <div>
            <h1>Checkout page</h1>     
            {cartItems[0].name}
        </div>
    )
}

export default Checkout
