import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GameFinder from "../../apis/GameFinder";
import { GamesContext } from "../../context/GamesContext";
import './gamecollection.css';
import ReactPaginate from 'react-paginate';

const GameCollection = () => {
    const {userid} = useParams();
    const [collectionsGamer,setcollectionsGamer] = useState([]); 
    const [colGames, setcolGames] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    
    const gamesPerPage = 10;
    const pagesVisited = pageNumber * gamesPerPage;

    const displayGames =(colGames
  .slice(pagesVisited, pagesVisited + gamesPerPage)
  .map(game => {
    return(
      <tr onClick={() => handleGameSelect(game.gameid)} key={game.gameid}>
      <td><img src={game.imageurl} alt="game-logo"/></td>
      <td>{game.title}</td>
      <td>{game.rating}</td>
      </tr>
    );
  }));

  const pageCount = Math.ceil(colGames.length / gamesPerPage);
  const handlePageClick = ({selected}) =>{
    setPageNumber(selected);
  };
    useEffect(() => {
        async function fetchData(){
            try{
                GameFinder.post('/user', {"id":userid}).then(res => {   
                    setcollectionsGamer(res.data[0]);
                    GameFinder.post('/owns', {"userid":userid}).then(res => {
                        setcolGames(res.data);
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