import React, { useState, useEffect } from 'react';
import {useHistory, Link, NavLink} from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import CartIcon from '../cart-icon/cart-icon.component'
import './Navbar.styles.scss'
function Navbar() {
    const history = useHistory()
    const [drawer, setDrawer]=useState(false)
    const openDrawer = ()=> {
        setDrawer(true)
    }
    const closeDrawer = ()=>{
        setDrawer(false)
    }
    const list = () => (
        <div onClick = {closeDrawer}>
            <Button className="nav-link" component={NavLink} to={'/sell'}>Sell Art</Button>
            <Divider/>
            <Button className="nav-link" component={NavLink} to={'/custom'}>Custom Order</Button>
            <Divider/>
            <Button className="nav-link" component={NavLink} to={'/art'}>Buy Art</Button>
            <Divider/>
            <Button className="nav-link" component={NavLink} to={'/cart'}>Check Out</Button>
            <Divider/>
        </div>
    )
    return (
        <div className="Navbar">
            <div className="nav-btn-container">
                <Link className="brand" to="/">esscre</Link>
                <div className="big-link-container justify-right">
                    <NavLink className="links" to="/sell">Sell Art</NavLink>
                    <NavLink className="links" to="/custom">Custom Order</NavLink>
                    <NavLink className="links" to="/art">Buy Art</NavLink>
                </div>
                <MenuIcon className="hamburger justify-right" onClick={openDrawer}/>
                <CartIcon/>
            </div>
            <Drawer anchor={'right'} open={ drawer } onClose={closeDrawer} > 
                {list()}
            </Drawer>
        </div>
    )
}

export default Navbar
