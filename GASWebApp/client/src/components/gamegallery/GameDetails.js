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
    const [tags, setTags] = useState([]);
    
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
                console.log("error");
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        async function fetchBooleans(){
            if(gamerID > 0){
            //check if game is already in collection
                GameFinder.post('/checkIfOwned', {
                    "userID":gamerID,
                    "gameID":gameid
                }).then(res => {
                    setisAdded(res.data[0].exists)
                }).catch(err => {
                    console.log(err);
                });
                GameFinder.post('/checkIfWishlist', {
                    "userID":gamerID,
                    "gameID":gameid
                }).then(res => {
                    setisWish(res.data[0].exists)
                }).catch(err => {
                    console.log(err);
                });
            }
        }
        fetchBooleans();
    }, []);

    useEffect( () => {
                 GameFinder.post('/getTagsByID', {
                    "gameid": gameid
                }).then(res => {
                    setTags(res.data);
                    console.log(res.data)
                }).catch(err => {
                    console.log(err);
                })
    },[]);

     const tagList = tags.map((item) => 
                            item.tag + " "
     );
                           
                        

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
                    <th scope="col">Tags</th>
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
                <th scope="col">Tags</th>
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
                    <td>{tagList}</td>
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
                <td>{tagList}</td>
            </tr>
            );
        }
    }

    const handleCollectionAdd = async () => {
        //add to collection
        GameFinder.post('/addToCollection', {
            "userid":gamerID,
            "gameid":gameid, 
            "numcopies":1}
            );
        //change button to remove from collection
        setisAdded(true);
      
    }
    const handleRemoveCollection = async () => {
        //add to collection
        console.log(gamerID + " " + gameid);
        GameFinder.post('/removeFromCollection', {
            "userid":gamerID,
            "gameid":gameid 
        });
        //change button to remove from collection
        setisAdded(false);
        
    }
    const handlewishlistAdd = async () => {
        //add to collection
        GameFinder.post('/addWishlist', {"userid":gamerID,"gameid":gameid });
        //change button to remove from collection
        setisWish(true);
      
    }
    const handleRemoveWish = async () => {
        //add to collection
        GameFinder.post('/removeWishlist', {"userid": gamerID, "gameid": gameid});
        //change button to remove from collection
        setisWish(false);
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
          <center>
{(gamer.userid > 0) &&
          <button onClick={isAdded ? handleRemoveCollection : handleCollectionAdd} className="addButton">{isAdded ? 'Remove from':'Add to'} Collection</button>
}
{(gamer.userid > 0) &&
          <button onClick={isWish ? handleRemoveWish : handlewishlistAdd} className="addButton">{isWish ? 'Remove from':'Add to'} Wishlist</button>
}
          </center>
        </div>    
      </div>
    </div>    
  );
}

export default GameDetails;