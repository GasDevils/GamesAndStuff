import React, {useContext, setState, useState} from 'react'
import {NavLink} from 'react-router-dom';
import GameFinder from '../../apis/GameFinder'
import './login.css';
import { UserContext } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom';

const Login = (props)=>{
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [loginErrors, setloginErrors] = useState('');
    const {gamer, setGamer} = useContext(UserContext);

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
            GameFinder.post('/login', {
                "username": username, 
                "password": password
            }).then(res => {
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
<<<<<<< HEAD
                <input type="text" name="username" id="username" required="" placeholder="Username" onChange={handleChange}>
=======
                <input type="text" name="username" id="username" required="" placeholder="Username" onChange={e => setusername(e.target.value)}>
>>>>>>> c1a0e5fa148ad9d364811a11dfff94e1056b31a6
                </input>

            </div>

            <div className="user-box">
<<<<<<< HEAD
                <input type="password" name="password" id="password" required="" placeholder="Password" onChange={handleChange}>
=======
                <input type="password" name="password" id="password" required="" placeholder="Password" onChange={e => setpassword(e.target.value)}>
>>>>>>> c1a0e5fa148ad9d364811a11dfff94e1056b31a6
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
            </center>


        </form>

    </div>)
}
<<<<<<< HEAD

const state={
    username:"",
    password:"",
    loginErrors:""
}

const handleChange = (e) => {
    console.log(e.target);
	const{name, value} = e.target;
	console.log("name: " + name + " value:" + value);
    this.setState({[name]:value});
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
=======
>>>>>>> c1a0e5fa148ad9d364811a11dfff94e1056b31a6
    

export default Login;
