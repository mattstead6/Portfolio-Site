import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import linkedin from './images/linkedin.png';
import github from './images/github.png';
import IG from './images/ig.png'
import emailLogo from'./images/email.png'
import resumeLogo from './images/resume.png'
 
const Navbar = () => {
    return (
         
        <nav>
             <div className='left-side-logo-container'>
            <div className='navbar-left-section'>
            <a href="github.com/mattstead6">
            <img className='socials-logos' src={github} alt='Github Logo'/>
            </a>
            </div>
            <div className='navbar-left-section'>
            <a href="https://www.linkedin.com/in/matthew-stead6">
            <img className='socials-logos' src={linkedin} alt='LinkedIn Logo'/>
            </a>
            </div>
            <div className='navbar-left-section'>
            <a to="https://www.instagram.com/mattstead6/">
            <img className='socials-logos' src={IG} alt='Instagram Logo'/>
            </a>
            </div>
            </div>
            <div className="name-container">
                <h2>Matt Stead</h2> 
                <div className="cool-bar">
                </div>
            </div>
            <div className="nav-items-container">
                <div className='navbar-top-section'>
                    <div className='links'> 
                    <Link style={{color: 'white'}} to="/about">About</Link>
                    </div>    
                </div> 
                <div className='navbar-top-section'>
                <div className='links'>
                <Link style={{color: 'white'}}  to="/projects">Projects</Link>
                </div>
                 
                </div>
                <div className='navbar-top-section'>
                    <div className='links'>
                    <Link style={{color: 'white'}} to="/about">Blogs</Link>
                    </div>
                   
                </div>
            </div>
            <div className='top-right-navbar-container'>
            <div className='top-right-navbar'>
            <a href="https://docs.google.com/document/d/e/2PACX-1vSIEtXI-uySQ2ZgTjSFO7fJ2xaTiMqPv6-yEOKG19RFDk47u24GAHOkD3llFghHtZj9WNdPYBQfFiy0/pub">
                <img className='top-logos' src={resumeLogo}/>
            </a>
            </div>
            <div className='top-right-navbar'>
            <a href='mailto:mattstead6@gmail.com?subject=Hello!'>
                <img className='top-logos' src={emailLogo} alt='Email Logo'/>
            </a>
            </div>
            </div>
        </nav>
       
    )
}

export default Navbar;