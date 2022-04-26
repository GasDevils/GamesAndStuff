import React, {useState, useContext, useEffect, useDebugValue} from 'react'
import ReactPaginate from 'react-paginate';
import _ from 'lodash';
import './friends.css'
import GameFinder from '../../apis/GameFinder'
import { FriendsContext } from '../../context/FriendsContext'
import { UserContext } from '../../context/UserContext';

 //////////////////////////////////////////////////////////////////////////////
 const Friends = () => {
   const {gamer} = useContext(UserContext);
   const [friends, setFriends] = useState([]);
   const [displayFriends, setDisplayFriends] = useState([]);
   const [pageNumber, setPageNumber] = useState(0);
   
   const gamesPerPage = 10;
  
   const pagesVisited = pageNumber * gamesPerPage;

   const pageCount = Math.ceil(friends.length / gamesPerPage);


   useEffect( () => setDisplayFriends( 
    friends
    .slice(pagesVisited, pagesVisited + gamesPerPage)
    .map(friend => {
      return(
        <tr /*onClick={() => handleGameSelect(game.gameid)} key={game.gameid}*/>
        <td>{friend.username}</td>
        <td>{friend.dateAdded}</td>
        </tr>
      );
    })
  ))[pageNumber];


  useEffect(() => {
    const userID = gamer.userid;
    const fetchData = async () => {
      try{
        const response = await GameFinder.post("/friends", {
          "id": userID//fill in with actual value from login
        });
        console.log(response);//use response.data to get friends userid2 and dateadded are relevant
        setFriends(response.data.rows);
      }catch(err){
      }
    }
    fetchData();
  },[])


 return(
    <div className="friends">
    <div className="container">
      <div className="list-group">
        <table className="table table-hover table-dark">
          <thead>
            <tr>
              <th scope="col">Username</th>
              <th scope="col">Become friends on</th>
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
    </div>);  
}


export default Friends;
