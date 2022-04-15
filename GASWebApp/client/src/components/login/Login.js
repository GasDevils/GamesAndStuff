import React from 'react'

import './login.css';

const Login = ()=>{
    return(
    <div className="login-box">
    <h2>Welcome G.A.S. User!</h2>
    <h2>Sign in to your account.</h2>
        
        <form>
            <div className="user-box">
                <input type="text" name="" required="">
                <label>Username</label>
                </input>
                
            </div>

            <div className="user-box">
                <input type="password" name="" required="">
                <label>Password</label>
                </input>
                
            </div>

            <a href="#">
                <center>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Login
                </center>
            </a>


        </form>

    </div>)
}


export default Login;