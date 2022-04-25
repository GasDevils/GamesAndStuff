import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import GameFinder from "../../apis/GameFinder";
import { GamesContext } from "./context/GamesContext";
import './gamedetails.css';

const GameDetails = () => {
    const {gameid} = useParams();
    const {selectedGame, setSelectedGame} = useContext(GamesContext);
    
    useEffect(() => {
        const fetchData = async() =>{
            try{
                if(gameid < 27076){
                    const response = await GameFinder.post('/getVideoGameInfoByID', {gameid});
                }
                else{
                    const response = await GameFinder.post('/getTableTopGameInfoByID', {gameid});
                }
                console.log(response);
                setSelectedGame(response.data);
            } catch (err){
                console.log(err);
            }
        }
        fetchData();
    }, [])
  return (
    <div>
      <h1>Game Details</h1>
    </div>
  );
}

export default GameDetails;