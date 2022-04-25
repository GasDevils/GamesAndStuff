import React, {useState, useContext, useEffect} from 'react'
import ReactPaginate from 'react-paginate';
import _ from 'lodash';
import './friends.css'
import FriendFinder from '../../apis/FriendFinder'
import { FriendsContext } from '../../context/FriendsContext'

 //////////////////////////////////////////////////////////////////////////////
 const Friends = () => {
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
              <tr>
                <td>Test Friend</td>
                <td>Test Friend 2</td>
                <td>Test Friend 3</td>
              </tr>
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