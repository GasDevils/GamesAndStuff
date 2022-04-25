import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import GameFinder from "../../apis/GameFinder";
import { GamesContext } from "../../context/GamesContext";
import './gamedetails.css';

const GameDetails = () => {
    const {gameid} = useParams();
    const {selectedGames, setSelectedGames} = useContext(GamesContext);
    
    useEffect(() => {
        async function fetchData(){
            try{
                
                if(gameid < 27076){
                    const response = await GameFinder.post('/getVideoGameInfoByID', {gameid});
                    //console.log(response.data[0]);
                    setSelectedGames(response.data[0]);
                }else{
                    const response = await GameFinder.post('/getTableTopGameInfoByID', {gameid});
                    setSelectedGames(response.data[0]);
                }
                
            } catch (err){
                console.log(err);
            }
        }
        fetchData();
    }, []);

    const videoGameColumns = () => {
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
        } else{
            {tableTopGameColumns()};
        }

        
    }
    const tableTopGameColumns = () => {
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
    };
    const showVideoGameDetails = () => {
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
        else{
            {showTableTopGameDetails()}
        }
    }

    const showTableTopGameDetails = () => {
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

  return (    
    <div className="container">
    <div className="game-gallery">
      <div className="container">
        <div className="list-group">
          <table className="table table-hover table-dark">
            <thead>
            {videoGameColumns()}

            </thead>
            <tbody>
                {showVideoGameDetails()}

            </tbody>
          </table> 
        </div>    
      </div>
    </div>
    </div>
    
  );
}

export default GameDetails;