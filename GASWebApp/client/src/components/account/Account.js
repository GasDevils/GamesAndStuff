import React, {useContext} from 'react'
import Navbar from '../navbar/Navbar'
import './account.css'
import GameFinder from '../../apis/GameFinder'
import { UserContext } from '../../context/UserContext';

const Account = () => {
    const {gamer} = useContext(UserContext);
    const userID = gamer.userid;
    let numFriends = 0;
    GameFinder.post('/getFriendCount',{
        "userid": userID
    }).then(res => {
        numFriends = res.data[0].count
    }).catch(err => {
        console.log(err);
    });
    let numGames = 0;
    GameFinder.post('/getCollectionCount',{
        "userid": userID
    }).then(res => {
        numGames = res.data[0].count
    }).catch(err => {
        console.log(err);
    });
    let numWishlist = 0;
    GameFinder.post('/getWishListCount',{
        "userid": userID
    }).then(res => {
        numWishlist = res.data[0].count
    }).catch(err => {
        console.log(err);
    });
    console.log(numGames, numWishlist, numFriends);
    return(
        
        <div>
            <div className="content-profile-page">
                <div className="profile-user-page card">
                    <div className="img-user-profile">
                        <img className="profile-bgHome" src="https://media.discordapp.net/attachments/823697744022470658/963600612627476500/gamerBanner2.png?width=873&height=270" />
                        <img className="avatar" src="https://media.discordapp.net/attachments/823697744022470658/963595725181177877/b8fe2363a39908a287e1a29c136202c9.png?width=415&height=415" alt="GamerPic"/>
                    </div>

                    <button>+ Friend</button>

                    <div className="user-profile-data">
                        <h1>{gamer.username}</h1>
                    </div> 
                        
                    <div className="description-profile">I am an Arizona State University student. I love board games, tabletop games, and pizza!
                    </div>
                    
                    <ul className="data-user">
                        <li><a><strong>Games</strong><span>{numGames}</span></a></li>
                        <li><a><strong>Wishlist</strong><span>{numWishlist}</span></a></li>
                        <li><a><strong>Friends</strong><span>{numFriends}</span></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Account;