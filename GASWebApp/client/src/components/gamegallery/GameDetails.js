import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GameFinder from "../../apis/GameFinder";
import { GamesContext } from "../../context/GamesContext";
import { UserContext } from "../../context/UserContext";
import './gamedetails.css';

const GameDetails = () => {
    const {gameid} = useParams();
    const {selectedGames, setSelectedGames} = useContext(GamesContext);
    const [isAdded, setisAdded] = useState(false);
    const [isWish, setisWish] = useState(false);
    const {gamer} = useContext(UserContext);
    const gamerID = gamer.userid;
    
    useEffect(() => {
        async function fetchData(){
            try{
                
                if(gameid < 27076){
                    const response = await GameFinder.post('/getVideoGameInfoByID', {gameid});
                    //console.log(response.data[0]);
                    setSelectedGames(response.data[0]);
                }
                if(gameid >= 27076){
                    const response = await GameFinder.post('/getTableTopGameInfoByID', {gameid});
                    setSelectedGames(response.data[0]);
                }
            }catch{
                console.log(err);
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        //check if game is already in collection
        GameFinder.post('/checkIfOwned', {
            "userID":gamerID,
            "gameid":gameid
        }).then(res => {
            setisAdded(res.data[0])
        });
        GameFinder.post('/checkIfWishlist', {
            "userID":gamerID,
            "gameid":gameid
        }).then(res => {
            setisWish(res.data[0])
        });
    });

    const gameColumns = () => {
        if(selectedGames.gameid < 27076){
            return(
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Platform</th>
                    <th scope="col">Release Date</th>
                    <th scope="col">Publisher</th>
                    <th scope="col">Developer</th>
                    <th scope="col">Rating</th>
                    <th scope="col">Users Rated</th>
                  </tr>
            );
        } 
        if(selectedGames.gameid >= 27076){
            return(
            <tr>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Min Players</th>
                <th scope="col">Max Players</th>
                <th scope="col">Min Age</th>
                <th scope="col">Release Year</th>
                <th scope="col">Rating</th>
                <th scope="col">Users Rated</th>
              </tr>
            );
        }

        
    }

    const showGameDetails = () => {
        if(gameid < 27076){
            return(
                <tr key={selectedGames.gameid}>
                    <td><img src={selectedGames.imageurl} alt="game-logo"/></td>
                    <td>{selectedGames.title}</td>
                    <td>{selectedGames.platform}</td>
                    <td>{selectedGames.releasedate}</td>
                    <td>{selectedGames.publisher}</td>
                    <td>{selectedGames.developer}</td>
                    <td>{selectedGames.rating}</td>
                    <td>{selectedGames.numusersrated}</td>
                </tr>
            );
        }
        if(gameid >= 27076){
            return(
            <tr key={selectedGames.gameid}>
                <td><img src={selectedGames.imageurl} alt="game-logo"/></td>
                <td>{selectedGames.title}</td>
                <td>{selectedGames.minplayers}</td>
                <td>{selectedGames.maxplayers}</td>
                <td>{selectedGames.minage}</td>
                <td>{selectedGames.releaseyear}</td>
                <td>{selectedGames.rating}</td>
                <td>{selectedGames.numusersrated}</td>
            </tr>
            );
        }
    }

    const handleCollectionAdd = async () => {
        //add to collection
        GameFinder.post('/addToCollection', {"gameid": selectedGames.gameid, "userid": GameFinder.userID, numCopies: 1});
        //change button to remove from collection
        setisAdded(true);
    }
    const handleRemoveCollection = async () => {
        //add to collection
        GameFinder.post('/removeToCollection', {"gameid": selectedGames.gameid, "userid": gamerID});
        //change button to remove from collection
        setisAdded(false);
    }
    const handlewishlistAdd = async () => {
        //add to collection
        GameFinder.post('/addWishlist', {"gameid": selectedGames.gameid, "userid": gamerID});
        //change button to remove from collection
        setisWish(true);
    }
    const handleRemoveWish = async () => {
        //add to collection
        GameFinder.post('/removeWishlist', {"gameid": selectedGames.gameid, "userid": gamerID});
        //change button to remove from collection
        ssetisWish(false);
    }


  return (    
    <div className="game-gallery">
      <div className="container">
        <div className="list-group">
          <table className="table table-hover table-dark">
            <thead>
            {gameColumns()}

            </thead>
            <tbody>
                {showGameDetails()}

            </tbody>
          </table> 
{(gamer.userid > 0) &&
          <button onClick={isAdded ? handleRemoveCollection : handleCollectionAdd}>{isAdded ? 'Remove':'Add'} to Collection</button>
}
{(gamer.userid > 0) &&
          <button onClick={isWish ? handleRemoveWish : handlewishlistAdd}>{isWish ? 'Remove':'Add'} to Wishlist</button>
}
        </div>    
      </div>
    </div>    
  );
}

export default GameDetails;