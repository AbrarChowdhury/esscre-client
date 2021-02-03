import React from 'react';
import './footer.styles.scss';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';



function Footer() {
    return (
        <div className="social-container">
            <h2>Join The Community</h2>
            <a href="https://www.facebook.com/esscre" className="facebook">
                <FacebookIcon style={{ fontSize: 52 }}/>
            </a>
            <a href="https://www.instagram.com/_esscre" className="instagram">
                <InstagramIcon style={{ fontSize: 50 }}/>
            </a>
            <p>Contact | <a className="phone" href="tel:+8801624643338">+8801624643338</a> <br/> Address | 141/4, Lakecircus, Kolabagan Dhaka-1205</p>

        </div>
    );
}

export default Footer;