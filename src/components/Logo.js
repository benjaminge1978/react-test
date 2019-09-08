import React from 'react'
import LogoImage from '../logo.svg'
import FacebookIcon from '../img/facebook-icon.svg'
import TwitterIcon from '../img/twitter-icon.svg'
import InstaIcon from '../img/instagram-icon.svg'

function Logo(){
    return(
        <div className="main-title">
        <img className="logo" src={LogoImage} alt= 'Espresso Kitchen Logo'/>
        <h1 className="title">New Website Coming Soon</h1>
        <div className="social-media">
            <a href="https://www.facebook.com/EspressoKitchen/">
            <img className="social-icon" src={FacebookIcon} alt= 'Facebook Icon'/>
            </a>
            <a href="https://twitter.com/ExpressoKitchen">
            <img className="social-icon" src={TwitterIcon} alt= 'Twitter Icon'/>
            </a>
            <a href="https://www.instagram.com/espressokitchen/">
            <img className="social-icon" src={InstaIcon} alt= 'Instagram Icon'/>
            </a>
        </div>
        </div>
    )
}

export default Logo