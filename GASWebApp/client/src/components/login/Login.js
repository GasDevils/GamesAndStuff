import React, {useContext, useEffect, useState} from 'react'
import {NavLink} from 'react-router-dom';
import GameFinder from '../../apis/GameFinder'
import './login.css';
import { UserContext } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom';

const Login = (props)=>{
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [loginErrors, setloginErrors] = useState('');
    const {gamer,setGamer} = useContext(UserContext);
    const history = useNavigate();
        
    const useHandleSubmit = (e) => {
        e.preventDefault();
            GameFinder.post('/login', {
                "username": username, 
                "password": password
            }).then(res => {
            if(res.data.length !== 0){
                
                setGamer(res.data[0]);
                console.log("set gamer " + gamer)
                history('/gameGallery');
                setloginErrors("")
            }else{
                setloginErrors("Invalid username or password")
            }
        }).catch(err => {
                console.log(err);
        });
    }

    return(
    <div className="login-box">
    <h2>Welcome G.A.S. User!</h2>
    <h2>Sign in to your account.</h2>
        
        <form onSubmit={useHandleSubmit}>
            <div className="user-box">
                <input type="text" name="username" id="username" required="" placeholder="Username" onChange={e => setusername(e.target.value)}>
                </input>
            </div>
            <div className="user-box">
                <input type="password" name="password" id="password" required="" placeholder="Password" onChange={e => setpassword(e.target.value)}>
                </input>
            </div>

            <div className="user-box">
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
            </div>
            
            <center>
            <p style={{color:"white"}}>Don't have an account?</p>
            <li><NavLink to="/Signup" className="nav-link">Sign up here</NavLink></li>
            <p style={{color:"red"}}>{loginErrors}</p>
            </center>


        </form>

    </div>)
}
    

export default Login;
