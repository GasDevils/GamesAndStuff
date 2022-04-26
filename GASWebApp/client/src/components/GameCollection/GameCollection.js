import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GameFinder from "../../apis/GameFinder";
import { GamesContext } from "../../context/GamesContext";
import './gamecollection.css';
import ReactPaginate from 'react-paginate';

const GameCollection = () => {
    const {userid} = useParams();
    const collectionsGamer = {}; 
    const [selectedGames, setSelectedGames] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const gamesPerPage = 10;
    const displayGames = selectedGames.length == 0 ? selectedGames : selectedGames
  .slice(pagesVisited, pagesVisited + gamesPerPage)
  .map(game => {
    return(
      <tr onClick={() => handleGameSelect(game.gameid)} key={game.gameid}>
      <td><img src={game.imageurl} alt="game-logo"/></td>
      <td>{game.title}</td>
      <td>{game.rating}</td>
      </tr>
    );
  });

  const pageCount = Math.ceil(games.length / gamesPerPage);
  const handlePageClick = ({selected}) =>{
    setPageNumber(selected);
};
    useEffect(() => {
        async function fetchData(){
            try{
                GameFinder.post('/user', {"id":userid}).then(res => {   
                    collectionsGamer = res.data[0];
                    GameFinder.post('owns', {"id":userid}).then(res => {
                        setSelectedGames(res.data);
                    }).catch(err => {
                        console.log(err);
                    });
                }).catch(err => {
                    console.log(err);
                    //user not found
                });
            } catch (err){
                //user not found
                console.log(err);
            }
        }
        fetchData();
    }, []);

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

    return(
        <div className="game-gallery">
        <div className="container">
          <div className="list-group">
            <table className="table table-hover table-dark">
              <thead>
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col">Name</th>
                  <th scope="col">Rating</th>
                </tr>
              </thead>
              <tbody>
                  {displayGames}
                {/* <tr>
                  <td><img src="https://cf.geekdo-images.com/micro/img/uhYn0Xn8TZ1vzVfyi4VO1UfNTII=/fit-in/64x64/pic347837.jpg" alt="game-logo"/></td>
                  <td>Risk (Revised Edition)</td>
                  <td>60</td>
                </tr> */}
              </tbody>
            </table> 
          </div>    
        </div>
          <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={'...'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'paginationBttns'}
          previousLinkClassName={'previousBttn'}
          nextLIinkClassName={'nextBttn'}
          disabledClassName={'paginationDisabled'}
          activeClassName={'paginationActive'}
          /> 
        </div>
      );
}


export default GameCollection;