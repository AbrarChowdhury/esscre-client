import React, {useState} from 'react'
import logo from '../../assets/Logo-cropped.jpg'
import './info.styles.scss'
import Collapse from '@material-ui/core/Collapse';
function Info() {
    const [checked, setChecked]=useState(false)
    return (
        <div className="about-us-info">
            <div className="image">
            <img src={logo} alt="esscre-logo"/>
            </div>
            <div>
                <h1>About Us</h1>
                <p className="qoute" >Bangladesh has always been a country rich in culture, art, and literature. However, it is also the land where artistic flair is being taken for granted or being considered “just a hobby”. Our website aims to change that by providing a platform for the artists and talented minds in Dhaka (for now) who just need an opportunity to flaunt their skills and earn through their creativity.
                    <br/><br/>
                    Most of the time, when we post an artwork or take a photo, we do not receive the exposure we deserve. In another similar scenario, when we want to do commissions, we are unable to find the right client to deliver to or even the right medium to advertise our self-made products through.
                    <br/><br/>
                    <Collapse in={checked}>       
                        And this is where esscre comes in.
                        Esscre helps you to find clients and lets you showcase your artwork to a massive audience. Here, you are allowed to post and sell as many artworks as you want with the pricing you desire. However, we are aiming to sell not only your artwork but also the story behind it as we believe that an artwork’s meaning and concept is just as important as the artwork itself.
                        So, join us to show off your hidden talents, and we will make sure your passion and effort get recognized!                   
                    </Collapse>
                    <p onClick={() => setChecked(!checked)}>{
                        checked? "read less...": "read more..."
                    }
                    </p>
                </p>
            </div>
        </div>
    )
}

export default Info
