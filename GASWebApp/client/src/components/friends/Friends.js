import React, {useState, useContext, useEffect} from 'react'
import ReactPaginate from 'react-paginate';
import _ from 'lodash';
import './friends.css'
import FriendFinder from '../../apis/FriendFinder'
import { FriendContext } from '../../context/FriendsContext'

const Friends = (props) => {
    const{friends, setFriends} = useContext(FriendContext)
    const [pageNumber, setPageNumber] = useState(0);
    
    const friendsPerPage = 10;

    const pagesVisited = pageNumber * friendsPerPage;

    const displayFriends = friends
    .slice(pagesVisited, pagesVisited + friendsPerPage)
    
    .map(friend => {
    return(
        <tr key={user.userid}>
        </tr>
    );
});

const pageCount = Math.ceil(friends.length / friendsPerPage);

  useEffect(() => {
    async function fetchData(){
      try{
        const response = await FriendFinder.post('/friends');
        setFriends(response.data)
        
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
    <div className="friend-gallery">
    <div className="container">
      <div className="list-group">
        <table className="table table-hover table-dark">
          <thead>
            <tr>
              <th scope="col">Username</th>
            </tr>
          </thead>
          <tbody>
              {displayFriends}
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


export default Friends;