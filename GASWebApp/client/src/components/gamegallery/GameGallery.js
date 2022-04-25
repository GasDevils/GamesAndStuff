import React, {useState, useContext, useEffect} from 'react'
import ReactPaginate from 'react-paginate';
import _ from 'lodash';
import './gamegallery.css'
import Game from '../../components/game/Game'
import GameFinder from '../../apis/GameFinder'
import { GamesContext } from '../../context/GamesContext'

const GameGallery = (props) => {
  const{games, setGames} = useContext(GamesContext)
  const [pageNumber, setPageNumber] = useState(0);
  
  const gamesPerPage = 10;

  const pagesVisited = pageNumber * gamesPerPage;

  const displayGames = games
  .slice(pagesVisited, pagesVisited + gamesPerPage)
  .map(game => {
    return(
      <tr key={game.gameid}>
      <td><img src={game.imageurl} alt="game-logo"/></td>
      <td>{game.title}</td>
      <td>{game.rating}</td>
      </tr>
    );
  });

  const pageCount = Math.ceil(games.length / gamesPerPage);
  //const gamesToShow = _.slice(games, pagesVisited, pagesVisited + gamesPerPage);
  useEffect(() => {
    async function fetchData(){
      try{
        const response = await GameFinder.post('/games');
        setGames(response.data)
        
      } catch(err){}
    }
    fetchData();
  }, []);

  // Pagination

  const handlePageClick = ({selected}) =>{
      setPageNumber(selected);
  };
  //////////////////////////////////////////////////////////////////////////////
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

export default GameGallery;