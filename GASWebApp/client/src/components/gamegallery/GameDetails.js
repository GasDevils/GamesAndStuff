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
                </h1>
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
            </h1>

        </div>
    }

  return (
    <div>
        <div className="container">
            selectedGame.title;
        </div>
    </div>
  );
}

export default GameDetails;