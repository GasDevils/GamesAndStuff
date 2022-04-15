import React from 'react'

import './login.css';

const Login = ()=>{
    return(
    <div class="login-box">
    <h2>Welcome G.A.S. User!</h2>
    <h2>Sign in to your account.</h2>
        <form>
        <div class="user-box">
            <input type="text" name="" required="">
            </input>
            <label>Username</label>
        </div>
        <div class="user-box">
            <input type="password" name="" required="">
            </input>
            <label>Password</label>
        </div>
        <a href="#">
            <Center>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Login
            </Center>
        </a>
            <p style="color:white">Don't have an account?</p>
            <p style="color:white"><u>Sign up here</u> </p>
            
        </form>
    </div>)
}


export default Login;