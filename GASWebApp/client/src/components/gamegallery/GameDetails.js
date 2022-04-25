import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import GameFinder from "../../apis/GameFinder";
import { GamesContext } from "../../context/GamesContext";
import './gamedetails.css';

const GameDetails = () => {
    const {gameid} = useParams();
    const {selectedGame, setSelectedGame} = useContext(GamesContext);
    
    useEffect(() => {
        const fetchData = async() =>{
            try{
                let response;
                if(gameid < 27076){
                    response = await GameFinder.post('/getVideoGameInfoByID', {gameid});
                }else{
                    response = await GameFinder.post('/getTableTopGameInfoByID', {gameid});
                }
                
                console.log(response);
                setSelectedGame(response.data);
            } catch (err){
                console.log(err);
            }
        }
        fetchData();
    }, [])

    const showVideoGameDetails = () => {
        if(gameid < 27076){
            <div>
                <h1>
                    {selectedGame && selectedGame.title}
                    <img src={selectedGame.imageurl} alt="game-logo"/>
                </h1>
                <h2>
                    <li>Platform: {selectedGame.platform}</li>
                    <li>Developer: {selectedGame.developer}</li>
                    <li>Publisher: {selectedGame.publisher}</li>
                    <li>Release Date: {selectedGame.releasedate}</li>
                    <li>Received Ratings: {selectedGame.numusersrated}</li>
                    <li>Rating: {selectedGame.rating}</li>
                </h2>
            </div>
            
            
        }
        else{
            {showTableTopGameDetails()}
        }
    }

    const showTableTopGameDetails = () => {
        <div>
            <h1>
                {selectedGame && selectedGame.title}
                <img src={selectedGame.imageurl} alt="game-logo"/>
            </h1>
            <h2>
                <li>Max Players: {selectedGame.maxplayers}</li>
                <li>Min Players: {selectedGame.minplayers}</li>
                <li>Min Age: {selectedGame.minage}</li>
                <li>Release Year: {selectedGame.releaseyear}</li>
                <li>Received Ratings: {selectedGame.numusersrated}</li>
                <li>Rating: {selectedGame.rating}</li>
            </h2>
        </div>
    }

  return (
    <div>
        <div className="container">
            {showVideoGameDetails()}
        </div>
    </div>
  );
}

export default GameDetails;