import React, { useState, useEffect } from "react";

import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import {Link} from 'react-scroll'
import logo from '../../assets/logo.png';


const Navbar = () => {
    const [click, setClick] = useState(false);


    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    
    return (
        <nav className="z-10">
        <div className="navbar">
                <div className="navbar-container container ">
                    <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                        <img  src={logo}  alt="logo" className="w-28 cursor-pointer "/>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                          
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className=" nav-item">
                <Link to="aboutme" smooth={true} duration={1000} className='nav-links' onClick={closeMobileMenu}>
                    Über mich
                </Link>
                </li>
                <li className=" nav-item">
                <Link to="information" smooth={true} duration={1000} className='nav-links' onClick={closeMobileMenu}>
                    Kursinfo
                </Link>
                </li>
                <li className="nav-item">
                <Link to="termine" smooth={true} duration={1000} className='nav-links' onClick={closeMobileMenu}>
                    Termine
                </Link>
                </li> 
                <li className="nav-item">
                <Link to="contact" smooth={true} duration={1000} className='nav-links' onClick={closeMobileMenu}>
                    Kontakt
                </Link>
                </li> 
                <li>
               
                  <Link to="anmelden" smooth={true} duration={1000}>
                  <button className="bubbly-button py-2 px-7 mx-4">Anmelden</button>
                  </Link>
               
                    </li>   
                </ul>
                </div>
        </div>

        
        </nav>  
      
    );
}

export default Navbar;