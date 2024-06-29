import React from "react";
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram,faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
    return (
        <div id="footer">
            <p className="footenquery">For any query !</p>
            <div id="contactInfo">
                <div>
                    <p>Phone: 9535282098</p>
             
                    <p>Email : eyanleroy444@gmail.com</p>
                </div>
                <div>
                    <p>copyright@eyanleroy</p>
                </div>
                <div id="icons">
                    <p><a href="https://www.instagram.com/eyan_leroy?utm_source=qr&igsh=MTZ0dmx6MW9uaWF3Zw=="><FontAwesomeIcon id="Instagram" icon={faInstagram} size='l' /></a></p>
                    <p><a href="https://www.linkedin.com/in/eyan-leroy-sequeira-55aa7a219"><FontAwesomeIcon id="LinkedIn" icon={faLinkedin} size='l' /></a></p>
                </div>
            </div>

        </div>
    )
}