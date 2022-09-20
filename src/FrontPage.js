import React from "react";
import './App.css';
import picOfMe from './images/pic-of-me.JPG'
import background from './images/background.jpg'

const FrontPage = () => {
    
    return (
  
        <div className="front-page-container">
                 <div className='overlay' style={{background: `url(${background})`}}></div>
        <div className="text-intro-container">
        <h1 className="my-name">Hi,</h1>
        <h1 className="my-name"> I'm Matt</h1>
        <h1 className="im-an-engineer">a software engineer</h1>
        </div>
        <div>
            <img className="picture-of-me" src={picOfMe} alt='Picture of Matt'/>
        </div>
        </div>
     /* click on my name to find out where it's from and you can see where yours is from too */

  
    )
}

export default FrontPage;