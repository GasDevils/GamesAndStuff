import React from 'react'
//import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';

import logo from '../../assets/logo.png'

import './navbar.css';

const Navbar = ()=>
{
  return(
    <body>
        <nav>
          <div class="container">
            <h1 class="gradient shimmer">
              
              <d className="gpt3__navbar-links_logo">
              <img src= {logo} alt= "" />
              </d>
              <a href="">G.A.S.</a>
              
            </h1>
          
            <div class="nav-list">
              <a href="#" class="active">Home</a>
              <a href="#">Game Gallery</a>
              <a href="#">My Account</a>
              <a href="#">Friends</a>
              <a href="#">Login</a>
            </div>
        
          </div>
        </nav>
        <p class="display-text"> DISCOVER GREAT GAMES! WIP </p>
        
      </body>
  );
  
}

export default Navbar

/*BEM naming convention, block element modifier

note: change #home to point to things like "feature" and etc so they can go to correct places
  <body>
    <nav>
      <div class="container">
        <h1 class="gradient shimmer"><a href="">G.A.S.</a></h1>
      
        <div class="nav-list">
          <a href="#" class="active">Home</a>
          <a href="#">Game Gallery</a>
          <a href="#">My Account</a>
          <a href="#">Friends</a>
        </div>
    
      </div>
    </nav>
    <p class="display-text"> DISCOVER GREAT GAMES! WIP </p>
    
  </body>

const Navbar = () => {
  return (
    <div className="gpt3__navbar">
        <div className="gpt3__navbar-links">
          <div className="gpt3__navbar-links_logo">
            <img src= {logo} alt= "logo" />
          </div>

          

          <div className="gpt3_navbar-links_container">
            <p><a href="#home">Home</a></p>
            <p><a href="#home">GameGallery</a></p>
            <p><a href="#home">MyAccount</a></p>
            <p><a href="#home">Friend</a></p>

          </div>

        </div>

        
        <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
        </div>

    </div>
  )
}

/*formatted sign up/sign in properly in navbar.css

export default Navbar
*/