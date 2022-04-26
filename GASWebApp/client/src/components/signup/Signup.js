import React, {useState, useContext, useEffect} from 'react'
import {NavLink} from 'react-router-dom';
import { UserContext } from '../../context/UserContext'
import GameFinder from '../../apis/GameFinder'
import './signup.css';
import { useNavigate } from 'react-router-dom';

const Signup = (props)=>{
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [registerErrors, setregisterErrors] = useState('');
    let history = useNavigate();
    const {setGamer} = useContext(UserContext);

    const useHandleSubmit = (e) => {
        e.preventDefault();
            GameFinder.post('/getUserInfoByUsername',{//check if username exists
                "username": username
            }).then(res => {
                if(res.data.length !== 0){
                    setregisterErrors("Username already exists");
                    console.log(registerErrors);
                }else{
                    GameFinder.put('/createUser', {//create new user
                        "username": username, 
                        "password": password
                    }).then(res => {
                        GameFinder.post('/getUserInfoByUsername',{//get user info for context
                            "username": username
                        }).then(res => {
                            setGamer(res.data[0]);
                            history('/gameGallery');//if successful login redirect to gameGallery
                        })
                    }).catch(err => {
                        console.log(err);
                    });
            }}).catch(err => {
                console.log(err)
            });
    }
    return(
    <div className="login-box">
    <h2>Welcome NEW G.A.S. User!</h2>
    <h2>Choose a username and password for your account.</h2>
        <form onSubmit={useHandleSubmit}>
            <div className="user-box">
                <input type="text" name="username" required="" placeholder="Username" onChange= {e => setusername(e.target.value)}>
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
                    <button onSubmit = {useHandleSubmit}>Signup</button>
                    </center>
                </a>
                <p style={{color:"red"}}>{registerErrors}</p>
            </center>

        </form>

    </div>)
}



export default Signup;