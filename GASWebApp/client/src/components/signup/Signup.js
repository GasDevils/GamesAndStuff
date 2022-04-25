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

    const handleSubmit = (e) => {
        e.preventDefault();
            GameFinder.get('/userSearchByUsername',{
                "username": username
            }).then(res => {
                if(res.data.length > 0){
                    setregisterErrors("Username already exists");
                }else{
                    GameFinder.put('/createUser', {
                        "username": username, 
                        "password": password
                    }).then(res => {
                    //setUser(res.data)
                    history('/gameGallery');//if successful login redirect to gameGallery
                })
            }}).catch(err => {
                console.log(err)
            });
    }
    return(
    <div className="signup-box">
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
                    <button onSubmit = {usehandleSubmit}>Signup</button>
                    </center>
                </a>
            </center>

        </form>

    </div>)
}



export default Signup;