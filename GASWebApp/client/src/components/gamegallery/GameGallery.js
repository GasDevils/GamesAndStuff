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

/* <head>
      <card>
        <table>
          <div className="topSearchDisplay">
            <table className="searchDisplay">
              <tr>
                <td>
                  <input className="searchLocation" value='' type="text" placeholder='Search Game Title'></input>
                  <select></select>
                  <input className="search-button" type="submit" value="Search"></input> 
                </td>
              </tr>
              <tr className='customRangeSection_10'>
              </tr>
            </table>
          </div>
        </table>

        <div className="searchFiltersDisplay">
          <table>
            <tr>
              <td>&nbsp;&nbsp;&nbsp;</td>
              <td>Keywords
              </td>
              <td>&nbsp;&nbsp;&nbsp;</td>
              <td>Rating
              </td>
              <td>&nbsp;&nbsp;&nbsp;</td>
              <td>Type
              </td>
              <td>&nbsp;&nbsp;&nbsp;</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>&nbsp;&nbsp;&nbsp;</td>
              <td>
                <input className='query' value='' type="text" placeholder=' e.g. survival, fantasy'
                      title='Enter keywords here'></input>

<<<<<<< Updated upstream
    </card>
    </head>
</div>
    );
}
=======
              </td>
              <td>&nbsp;&nbsp;&nbsp;</td>
              <td>
                <select className='locRadius' title='Enter the location radius to search on'>
                  <option value=""selected="selected">None</option>
                  <option value="0-10">0-10</option>
                  <option value="10-30">10-30</option>
                  <option value="40-50">40-50</option>
                  <option value="60-70">60-70</option>
                  <option value="70-80">70-80</option>
                  <option value="90-100">90-100</option>
                </select>
              </td>
              <td>&nbsp;&nbsp;&nbsp;</td>
              <td>
                <select className='locRadius' title='Enter the location radius to search on'>
                  <option value=""selected="selected">All</option>
                  <option value="Tabletop">Tabletop</option>
                  <option value="Video Game">Video Game</option>
                </select>
              </td>
            </tr>
          </table>
          <table>
          </table>
        </div>
>>>>>>> Stashed changes

        <form>
          <table>
            <tr>
              <td width='350'>
                <div className="video-container">
                  <table className='tableOfVideoContentResults'></table>
                </div>
              </td>
              <td valign='top'>
                <div className="map-canvas"></div>
              </td>
            </tr>
          </table>
        </form>
      </card>
    </head> */