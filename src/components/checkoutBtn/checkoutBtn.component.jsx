import React from 'react'
import { useHistory } from 'react-router-dom';
import './checkoutBtn.styles.scss'
function CheckouBtn() {
    let history = useHistory()
    return (
        <div className="CheckoutBtn">
            <button onClick={()=>history.push('/cart')}>Checkout</button>
        </div>
    )
}

export default CheckouBtn
