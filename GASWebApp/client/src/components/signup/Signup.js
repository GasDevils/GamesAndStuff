import React from 'react'
import {NavLink} from 'react-router-dom';

import './signup.css';

const signup = ()=>{
    
    return(
    <div className="signup-box">
    <h2>Welcome NEW G.A.S. User!</h2>
    <h2>Choose a username and password for your account.</h2>
        
        <form>
            <div className="user-box">
                <input type="text" name="" required="" placeholder="Username">
                </input>

            </div>

            <div className="user-box">
                <input type="password" name="" required="" placeholder="Password">
                </input>
            </div>

            
            <center>
                <a href="#">
                    <center>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <li><NavLink to="/" className="nav-link">Sign up</NavLink></li>
                    </center>
                </a>

            </center>

        </form>

    </div>)
}


export default Signup;