import React from 'react'
import { Link, NavLink} from 'react-router-dom'
import CartIcon from '../cart-icon/cart-icon.component'
import './Navbar.styles.scss'
function Navbar() {
    return (
        <div className="Navbar">
            <ul>
                <li className="brand"><Link to="/">ESSCRE</Link></li>
                <li><CartIcon/></li>
                <li><NavLink to="/sell">Sell Art</NavLink></li>
                <li><NavLink to="/custom">Custom Order</NavLink></li>
                <li><NavLink to="/art">Buy Art</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar
