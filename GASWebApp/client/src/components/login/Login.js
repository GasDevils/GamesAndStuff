import React from 'react'
import {NavLink} from 'react-router-dom';

import './login.css';

const Login = ()=>{
    
    return(
    <div className="login-box">
    <h2>Welcome G.A.S. User!</h2>
    <h2>Sign in to your account.</h2>
        
        <form method="POST">
            <div className="user-box">
                <input type="text" id="userName" required="" placeholder="Username">
                </input>

            </div>

            <div className="user-box">
                <input type="password" id="password" required="" placeholder="Password">
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
            
            <center>
            <p style={{color:"white"}}>Don't have an account?</p>
            <li><NavLink to="/" className="nav-link">Sign up here</NavLink></li>
            </center>


        </form>

    </div>)
}


export default Login;