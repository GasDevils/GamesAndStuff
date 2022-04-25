import React, {useContext, setState, useState} from 'react'
import {NavLink} from 'react-router-dom';
import GameFinder from '../../apis/GameFinder'
import './login.css';
import { UserContext } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom';



const Login = (props)=>{
    return(
    <div className="login-box">
    <h2>Welcome G.A.S. User!</h2>
    <h2>Sign in to your account.</h2>
        
        <form method="POST" onSubmit={useHandleSubmit}>
            <div className="user-box">
                <input type="text" id="username" required="" placeholder="Username" onChange={handleChange}>
                </input>

            </div>

            <div className="user-box">
                <input type="password" id="password" required="" placeholder="Password" onChange={handleChange}>
                </input>
            </div>

            
            <center>
                <a href="#">
                    <center>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <button onSubmit = {useHandleSubmit}>Login</button>
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

const state={
    username:"",
    password:"",
    loginErrors:""
}

const handleChange = (e) => {
    const{name, value} = e.target;
    setState({[name]:value});
}

const useHandleSubmit = (e) => {
    const{gamer,setGamer} = useState(null);
    const history = useNavigate();
    e.preventDefault();
    const{username, password, loginErrors} = state;
        GameFinder.post('/login', {username, password}).then(res => {
        if(res.data !== ""){
            setGamer(res.data);
            history('/gameGallery');
        }else{
            setState({loginErrors:"Invalid username or password"});
        }
      }).catch(err => {
            console.log(err);
      });
}

function useNavigateToGoToGameGallery(){
    
}

export default Login;