import React from 'react'
import {NavLink} from 'react-router-dom';
import { UserContext } from '../../context/UserContext'
import GameFinder from '../../apis/GameFinder'
import './signup.css';
import { useHistory } from 'react-router-dom';

const Signup = (props)=>{
    const{user,setUser} = useContext(UserContext);
    return(
    <div className="signup-box">
    <h2>Welcome NEW G.A.S. User!</h2>
    <h2>Choose a username and password for your account.</h2>
        
        <form method="POST">
            <div className="user-box">
                <input type="text" name="username" required="" placeholder="Username" onChange = {this.handleChange}>
                </input>

            </div>

            <div className="user-box">
                <input type="password" name="password" required="" placeholder="Password" onChange = {this.handleChange}>
                </input>
            </div>


            <center>
                <a href="#">
                    <center>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <button onSubmit = {this.handleSubmit}>Signup</button>
                    </center>
                </a>
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
    e.preventDefault();
    const{username, password} = this.state;
    try{
        const response = await GameFinder.get('/userSearchByUsername',username);
        if(response.data.length > 0){
            this.setState({loginErrors:"Username already exists"});
        }else{
            const response = await GameFinder.put('/createUser', {username, password});
            setUser(response.data);
            history.push('/gameGallery');//if successful login redirect to gameGallery
        }
      } catch(err){
        console.log(err);
        //print error message saying Username/User already exists
      } 
}

export default Signup;