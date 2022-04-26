import React, {useState, useContext, useEffect} from 'react'
import ReactPaginate from 'react-paginate';
import _ from 'lodash';
import './wishlist.css'
import GameFinder from '../../apis/GameFinder'
import { WishContext } from '../../context/WishContext'
import { UserContext } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom';

const Wishlist = (props) => {
  const {Wish, setWish} = useContext(WishContext)
  const [pageNumber, setPageNumber] = useState(0);
  const [query, setQuery] = useState('');
  const {gamer} = useContext(UserContext)  
  const gamesPerPage = 10;
  const [displayGames, setDisplayGames] = useState([])

 
  
  let navigate = useNavigate();
  const handleGameSelect = (gameid) => {
    navigate(`../gameGallery/game/${gameid}`);
  }

  useEffect(() => {
    async function fetchData(){
      try{
        const response = await GameFinder.post('/wishlist',{
          "userid": gamer.userid
        });
        console.log(response.data.rows)
        setWish(response.data.rows)
      } catch(err){}
    }
    fetchData();
  }, []);

  const pagesVisited = pageNumber * gamesPerPage;

  const pageCount = Math.ceil(Wish.length / gamesPerPage);
  useEffect( () => setDisplayGames( 
    Wish
    .filter(game=>game.title.toLowerCase().includes(query.toLowerCase()))
    .slice(pagesVisited, pagesVisited + gamesPerPage)
    .map(game => {
      return(
        <tr onClick={() => handleGameSelect(game.gameid)} key={game.gameid}>
        <td><img src={game.imageurl} alt="game-logo"/></td>
        <td>{game.title}</td>
        <td>{game.rating}</td>
        </tr>
      );
    })
    ),[pagesVisited]);

  

  // Pagination

  const handlePageClick = ({selected}) =>{
      setPageNumber(selected);
  };
  //////////////////////////////////////////////////////////////////////////////
  // Searching state
  
    return(
      <div className="game-gallery">
        <center>
        <input type="text" placeholder="Search for a game..." className="search" onChange={e=> setQuery(e.target.value)}/>  
        </center>
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

export default Wishlist;
