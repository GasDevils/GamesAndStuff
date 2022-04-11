import React from 'react'
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';

import logo from '../../assets/logo.png'

import './navbar.css';

/*BEM naming convention, block element modifier*/

const Navbar = () => {
  return (
    <div className="gpt3__navbar">
        <div className="gpt3__navbar-links">
          <div className="gpt3__navbar-links_logo">
            <img src= {logo} alt= "logo" />
          </div>

/*note: change #home to point to things like "feature" and etc so they can go to correct places*/

          <div className="gpt3_navbar-links_container">
            <p><a href="#home">Home</a></p>
            <p><a href="#home">GameGallery</a></p>
            <p><a href="#home">MyAccount</a></p>
            <p><a href="#home">Friend</a></p>

          </div>

        </div>

        /*formatted properly in navbar.css*/
        <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
        </div>

    </div>
  )
}

export default Navbar