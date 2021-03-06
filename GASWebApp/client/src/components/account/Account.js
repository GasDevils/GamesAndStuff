import React, {useContext,useEffect,useState} from 'react'
import Navbar from '../navbar/Navbar'
import './account.css'
import GameFinder from '../../apis/GameFinder'
import { UserContext } from '../../context/UserContext';
import { Navigate, NavLink, useNavigate } from 'react-router-dom';

const Account = () => {
    const {gamer} = useContext(UserContext);

    const [numFriends, setNumFriends] = useState(0);
    const [numGames, setNumGames] = useState(0);
    const [numWishlist, setNumWishlist] = useState(0);
    const userID = gamer.userid;
    const navigate = useNavigate();
    useEffect(() => {
        GameFinder.post('/getFriendCount',{
            "userid": userID
        }).then(res => {
            setNumFriends(res.data[0].num)
        }).catch(err => {
            console.log(err);
        });

        GameFinder.post('/getCollectionCount',{
            "userid": userID
        }).then(res => {
            setNumGames(res.data[0].num)
        }).catch(err => {
            console.log(err);
        });
        GameFinder.post('/getWishListCount',{
            "userid": userID
        }).then(res => {
            setNumWishlist(res.data[0].num)
        }, err => {
            console.log(err);
        });
    });


    return(
        <div>
            <div className="content-profile-page">
                <div className="profile-user-page card">
                    <div className="img-user-profile">
                        <img className="profile-bgHome" src="https://media.discordapp.net/attachments/823697744022470658/963600612627476500/gamerBanner2.png?width=873&height=270" />
                        {/*<img className="avatar" src="https://media.discordapp.net/attachments/823697744022470658/963595725181177877/b8fe2363a39908a287e1a29c136202c9.png?width=415&height=415" alt="GamerPic"/>*/}
                    </div>
                    
                    {/*<button>+ Friend</button>*/}

                    <div className="user-profile-data">
                        <h1>{gamer.username}</h1>
                    </div> 
                        
                    <div className="description-profile">
                    </div>
                    
                    <ul className="data-user">
                        {/*<li><a href="https://gasgames.tk/collection/user/"><strong>Games</strong><span>{numGames}</span></a></li>
                        <li><a href="https://gasgames.tk/wishlist/user/"><strong>Wishlist</strong><span>{numWishlist}</span></a></li>*/}
                        <li><NavLink to="/collection/user/" className="nav-link"><strong>Games</strong><span>{numGames}</span></NavLink></li>
                        <li><NavLink to="/wishlist/user/" className="nav-link"><strong>Wishlist</strong><span>{numWishlist}</span></NavLink></li>
                        {/*<li><a><strong>Friends</strong><span>{numFriends}</span></a></li>*/}
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default Account;