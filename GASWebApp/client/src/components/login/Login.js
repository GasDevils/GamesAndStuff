import React, {useContext, setState, useState} from 'react'
import {NavLink} from 'react-router-dom';
import GameFinder from '../../apis/GameFinder'
import './login.css';
import { UserContext } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom';

const Login = (props)=>{
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');

    const handleChange = (e) => {
        // const{name, value} = e.target;
        // console.log(name, value);
        // this.setState({[name]:value});
    }

    const useHandleSubmit = (e) => {
        const{gamer,setGamer} = useState(null);
        const history = useNavigate();
        e.preventDefault();
        console.log(username, password);
            GameFinder.post('/login', {username, password}).then(res => {
            if(res.data !== ""){
                setGamer(res.data);
                history('/gameGallery');
            }else{
                //setState({loginErrors:"Invalid username or password"});
            }
        }).catch(err => {
                console.log(err);
        });
    }

    return(
    <div className="login-box">
    <h2>Welcome G.A.S. User!</h2>
    <h2>Sign in to your account.</h2>
        
        <form method="POST" onSubmit={useHandleSubmit}>
            <div className="user-box">
                <input type="text" name="username" id="username" required="" placeholder="Username" onChange={e => setusername(e.target.value)}>
                </input>

            </div>

            <div className="user-box">
                <input type="password" name="password" id="password" required="" placeholder="Password" onChange={e => setpassword(e.target.value)}>
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
    

export default Login;