import React from 'react'
import {NavLink} from 'react-router-dom';
import GameFinder from '../../apis/GameFinder'
import './login.css';
import { UserContext } from '../../context/UserContext'

const Login = (props)=>{
    const{user,setUser} = useContext(UserContext);
    return(
    <div className="login-box">
    <h2>Welcome G.A.S. User!</h2>
    <h2>Sign in to your account.</h2>
        
        <form method="POST" onSubmit = {this.handleSubmit}>
            <div className="user-box">
                <input type="text" id="username" required="" placeholder="Username" onChange = {this.handleChange}>
                </input>

            </div>

            <div className="user-box">
                <input type="password" id="password" required="" placeholder="Password" onChange = {this.handleChange}>
                </input>
            </div>

            
            <center>
                <a href="#">
                    <center>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <button onSubmit = {this.handleSubmit}>Login</button>
                    </center>
                </a>

            </center>
            
            <center>
            <p style={{color:"white"}}>Don't have an account?</p>
            <li><NavLink to="/Signup" className="nav-link">Sign up here</NavLink></li>
            </center>


        </form>

    </div>)
}
state={
    username:"",
    password:"",
    loginErrors:""
}

handleChange = (e) => {
    const{name, value} = e.target;
    this.setState({[name]:value});
}

handleSubmit = (e) => {
    const{username, password} = this.state;
    try{
        const response = await GameFinder.post('/login', {username, password});
        setUser(response.data);
      } catch(err){

      }

    e.preventDefault();
}

export default Login;