import React, {useContext} from 'react'
import './logout.css';
import { UserContext } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom';

const Logout = (props)=>{
    const {gamer,setGamer} = useContext(UserContext);
    const history = useNavigate();
        
    const useHandleSubmit = (e) => {
        e.preventDefault();
        setGamer({});
        history('/gameGallery');
    }

    return(
    <div className="login-box">
    <h2>See ya later G.A.S. User!</h2>
    <h2>Sign Out to your account.</h2>
            <center>
                <center>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <button onSubmit = {useHandleSubmit}>Logout</button>
                </center>
            </center>
    </div>)
}
    

export default Logout;
