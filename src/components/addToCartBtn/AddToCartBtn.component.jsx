import React, {useContext }from 'react'
import './addToCartBtn.styles.scss'
import { CartContext } from '../../context/cartContex';
function AddToCartBtn({name, imageUrl, price}) {
    const { cartItems, addCartItem } = useContext(CartContext);
    const addItem=()=>{
        cartItems.findIndex(item => item.name == name) == -1 ? addCartItem(name, imageUrl, price) : console.log("object already exists")    
    }
    return (
        <div className = "AddToCartBtn">
            <button onClick={ addItem }>Add to Cart</button>
        </div>
    )
}

export default AddToCartBtn