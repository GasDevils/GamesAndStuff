import React from 'react'
import {NavLink} from 'react-router-dom';

import './login.css';

const Login = ()=>{
    
    return(
    <div className="login-box">
    <h2>Welcome G.A.S. User!</h2>
    <h2>Sign in to your account.</h2>
        
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
                    Login
                    </center>
                </a>

            </center>
            
            <p>Don't have an account?</p>
            <li><NavLink exact to="/" className="nav-link">Sign up here</NavLink></li>

            

        </form>

    </div>)
}


export default Login;