import React, { useContext} from 'react'
//import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';

//import logo from '../../assets/logo.png'

import './navbar.css';
import {NavLink} from 'react-router-dom';
import { UserContext } from '../../context/UserContext';


const Navbar = ()=>{
  const {gamer, setGamer} = useContext(UserContext);

  return(
    <div className="bg-background">
      <nav>
        <div className="container">
          <h1 className="gradient shimmer">
              
            <img src="https://media.discordapp.net/attachments/287073823608668163/962829511701962833/412ProjectLogo.png?width=437&height=437" alt="412 Project Logo"></img>

            <a href="/">G.A.S.</a>
              
          </h1>
          <div className="nav-list">
            {gamer == {} &&
            <li><NavLink to="/" className="nav-link">Home</NavLink></li>
            }
            <li><NavLink to="/gameGallery" className="nav-link">Game Gallery</NavLink></li>
            {gamer.userid > 0 &&
            <li><NavLink to="/Friends" className="nav-link">Friends</NavLink></li>
            }
            {gamer.userid > 0 &&
            <li><NavLink to="/Account" className="nav-link">Account</NavLink></li>
            }
            {gamer.userid > 0 &&
            <li><NavLink to="/" className="nav-link" onClick={setGamer({})}>Log Out</NavLink></li>
            }
          </div>
          

        </div>

      </nav>
      
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