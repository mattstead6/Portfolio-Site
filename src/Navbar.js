import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

const Navbar = () => {
    return (
         
        <nav>
             <div className='left-side-logo-container'>
            <div className='navbar-left-section'>
            <Link to="/github.com/mattstead6">Git</Link>
            </div>
            <div className='navbar-left-section'>
            <Link to="/https://www.linkedin.com/in/matthew-stead6">LinkedIn</Link>
            </div>
            <div className='navbar-left-section'>
            <Link to="/about">IG</Link>
            </div>
            </div>
            <div className="logo-container">
                <h2>Matt Stead</h2> 
                <div className="cool-bar">
                </div>
            </div>
            <div className="nav-items-container">
                <div className='navbar-top-section'>
                    <Link to="/about">About</Link>
                </div> 
                <div className='navbar-top-section'>
                    <Link to="/projects">Projects</Link>
                </div>
                <div className='navbar-top-section'>
                    <Link to="/about">Blogs</Link>
                </div>
            </div>
            <div className='top-right-navbar-container'>
            <div className='top-right-navbar'>
            <Link to="/">Resume</Link>
            </div>
            <div className='top-right-navbar'>
            <Link to="/">Email</Link>
            </div>
            </div>
        </nav>
       
    )
}

export default Navbar;