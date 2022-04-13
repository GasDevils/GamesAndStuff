import React from 'react'
//import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';

import logo from '../../assets/logo.png'

import './navbar.css';
import {NavLink} from 'react-router-dom';

const Navbar = ()=>{
  return(
    <body>
      <nav>
      

        <div class="container">
          <h1 class="gradient shimmer">
              
            <img src="https://media.discordapp.net/attachments/287073823608668163/962829511701962833/412ProjectLogo.png?width=437&height=437"></img>

            <a href="">G.A.S.</a>
              
          </h1>
          <div class="nav-list">
            <li><NavLink exact to="/" className="nav-link">Home</NavLink></li>
            <li><NavLink to="/gameGallery" className="nav-link">Game Gallery</NavLink></li>
            <li><NavLink to="/Friends" className="nav-link">Friends</NavLink></li>
            <li><NavLink to="/Account" className="nav-link">Account</NavLink></li>
          </div>
          

        </div>

      </nav>
      
    </body>
    
  );
}

export default Navbar;

/*
              <a href="/" class="active">Home</a>
              <a href="#">Game Gallery</a>
              <a href="#">My Account</a>
              <a href="#">Friends</a>
              <a href="#">Login</a>
*/