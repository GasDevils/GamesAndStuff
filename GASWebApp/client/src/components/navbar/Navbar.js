import React from 'react'
//import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';

import logo from '../../assets/logo.png'

import './navbar.css';
import {NavLink} from 'react-router-dom';

const Navbar = ()=>{
  return(
    <div className="navbar">

          <div class="container">
            <h1 class="gradient shimmer">
                
              <img src="https://media.discordapp.net/attachments/287073823608668163/962829511701962833/412ProjectLogo.png?width=437&height=437"></img>

              <a href="">G.A.S.</a>
                
            </h1>
            <NavLink exact to="/" activeStyle>Home</NavLink>
            <NavLink to="/gameGallery" activeStyle>Game Gallery</NavLink>
            <NavLink to="/Friends" activeStyle>Friends</NavLink>
            <NavLink to="/Account" activeStyle>Account</NavLink>
          
          </div>

    </div>
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