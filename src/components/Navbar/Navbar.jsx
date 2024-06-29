import React, { useState } from "react";
import profilePhoto from "./profilePhto.jpg"; // Ensure the correct path to the image file
import './Navbar.css';
import { FaBars } from 'react-icons/fa'; // Import the icon from react-icons

export const Navbar = () => {
    const [activeLink, setActiveLink] = useState('#home'); // Default active link
    const [showMenu, setShowMenu] = useState(false); // State for showing menu on small screens

    const handleLinkClick = (link) => {
        setActiveLink(link);
        // Close menu on link click if it's open
        if (showMenu) {
            setShowMenu(false);
        }
    };

    const handleMenuToggle = () => {
        setShowMenu(!showMenu);
    };

    return (
        <nav>
            <div className="container" id="nav">
                <div id="profile1" className={showMenu ? 'hidden' : 'visible'}>
                    <a href="#home" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                        <img className="Profile" src={profilePhoto} alt="profile photo" style={{ marginRight: '10px' }} />
                        <span style={{ color: 'white', verticalAlign: 'top', paddingLeft: '10px' }}>EyanLS</span>
                    </a>
                </div>
                <div className="menu-icon" onClick={handleMenuToggle}>
                <FaBars style={{ fontSize: '35px' }} />
                </div>
                <div className={`navbar ${showMenu ? 'active' : ''}`}>
                    <ul id="navbar">
                        <li>
                            <a
                                className={`menuItems ${activeLink === '#home' ? 'active' : ''}`}
                                href="#home"
                                onClick={() => handleLinkClick('#home')}
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                className={`menuItems ${activeLink === '#aboutus' ? 'active' : ''}`}
                                href="#aboutus"
                                onClick={() => handleLinkClick('#aboutus')}
                            >
                                AboutMe
                            </a>
                        </li>
                        <li>
                            <a
                                className={`menuItems ${activeLink === '#connect' ? 'active' : ''}`}
                                href="#connect"
                                onClick={() => handleLinkClick('#connect')}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
