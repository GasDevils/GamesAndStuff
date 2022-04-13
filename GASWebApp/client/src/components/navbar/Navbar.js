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
          
            <div class="nav-list">
              <ul className='nav-list-items'>
                <li>
                  <NavLink exact to="/" className='nav-link' activeClassName='nav-link-active'>Home</NavLink>
                </li> 
                <li>
                  <NavLink to="/game-gallery" className='nav-link' activeClassName='nav-link-active'>Game Gallery</NavLink>
                </li>
                <li>
                  <NavLink exact to="/account" className='nav-link' activeClassName='nav-link-active'>My Account</NavLink>
                </li> 
                <li>
                  <NavLink exact to="/friends" className='nav-link' activeClassName='nav-link-active'>Friends</NavLink>
                </li> 
              </ul>
              
            </div>
        
          </div>
      </div>
  );
}

export default Navbar

/*
              <a href="/" class="active">Home</a>
              <a href="#">Game Gallery</a>
              <a href="#">My Account</a>
              <a href="#">Friends</a>
              <a href="#">Login</a>
*/