import React, {useContext }from 'react'
import './addToCartBtn.styles.scss'
import { CartContext } from '../../context/cartContex';
function AddToCartBtn({id, title, image, price}) {
    const { cartItems, addCartItem } = useContext(CartContext);
    const addItem=()=>{
        cartItems.findIndex(item => item.title == title) == -1 ? addCartItem(id, title, image, price) : console.log("object already exists")    
    }
    return (
        <div className = "AddToCartBtn">
            <button onClick={ addItem }>Add to Cart</button>
        </div>
    )
}

export default AddToCartBtn