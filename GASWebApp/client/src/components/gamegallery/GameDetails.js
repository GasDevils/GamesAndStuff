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
                    console.log('gameid < 27076');
                    response = await GameFinder.post('/getVideoGameInfoByID', {gameid});
                    setSelectedGame(response.data);
                }else{
                    response = await GameFinder.post('/getTableTopGameInfoByID', {gameid});
                    setSelectedGame(response.data);
                }
                response = await GameFinder.post('/getTableTopGameInfoByID', {gameid});
                setSelectedGame(response.data);
            } catch (err){
                console.log(err);
            }
        }
        fetchData();
    }, [])

    const videoGameColumns = () => {
        if(selectedGame.gameid < 27076){
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
            tableTopGameColumns();
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
                <tr key={selectedGame.gameid}>
                    <td><img src={selectedGame.imageurl} alt="game-logo"/></td>
                    <td>{selectedGame.title}</td>
                    <td>{selectedGame.platform}</td>
                    <td>{selectedGame.releasedate}</td>
                    <td>{selectedGame.publisher}</td>
                    <td>{selectedGame.developer}</td>
                    <td>{selectedGame.rating}</td>
                    <td>{selectedGame.numusersrated}</td>
                </tr>
            );
        }
        else{
            {showTableTopGameDetails()}
        }
    }

    const showTableTopGameDetails = () => {
        return(
            <tr key={selectedGame.gameid}>
                <td><img src={selectedGame.imageurl} alt="game-logo"/></td>
                <td>{selectedGame.title}</td>
                <td>{selectedGame.minplayers}</td>
                <td>{selectedGame.maxplayers}</td>
                <td>{selectedGame.minage}</td>
                <td>{selectedGame.releaseyear}</td>
                <td>{selectedGame.rating}</td>
                <td>{selectedGame.numusersrated}</td>
            </tr>
        );
    }

    const cutoff = 27076;
  return (
    <div className="container">
    <div className="game-gallery">
      <div className="container">
        <div className="list-group">
          <table className="table table-hover table-dark">
            <thead>
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
            </thead>
            <tbody>
            <tr key={selectedGame.gameid}>
                    <td><img src={selectedGame.imageurl} alt="game-logo"/></td>
                    <td>{selectedGame.title}</td>
                    <td>{selectedGame.platform}</td>
                    <td>{selectedGame.releasedate}</td>
                    <td>{selectedGame.publisher}</td>
                    <td>{selectedGame.developer}</td>
                    <td>{selectedGame.rating}</td>
                    <td>{selectedGame.numusersrated}</td>
                </tr>
            </tbody>
          </table> 
        </div>    
      </div>
    </div>
    </div>
  );
}

export default GameDetails;