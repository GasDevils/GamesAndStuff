import React ,{useState,useMemo}from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Login from './components/login/Login';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'; //BrowserRouter is the router for the entire application 

import GameGallery from './components/gamegallery/GameGallery';
import Friends from './components/friends/Friends';
import Account from './components/account/Account';
import Notfound from './components/notfound/Notfound';
import { GamesContextProvider } from './context/GamesContext';
import Signup from './components/signup/Signup';
import Footer from './components/footer/Footer';
import { FriendsContextProvider } from './context/FriendsContext';
import { UserContext } from './context/UserContext';
import GameDetails from './components/gamegallery/GameDetails';
import Logout from './components/logout/Logout';
import GameCollection from './components/GameCollection/GameCollection';
import { CollectionContextProvider } from './context/CollectionContext';
import { WishContextProvider } from './context/WishContext';
import Wishlist from './components/Wishlist/Wishlist';


const App = () => {
  const[gamer,setGamer] = useState({});
  const loggedInUser = useMemo(
      () => ({gamer,setGamer}),
      [gamer]
  );
  return (  
    

    <UserContext.Provider value={loggedInUser}>
    <FriendsContextProvider>
    <GamesContextProvider>
    <CollectionContextProvider>
    <WishContextProvider>
      <Router>
      <Navbar />
        <div className='App'>
          <Routes>
            <Route path="/" exact element={<Login />} />
            <Route path="/gameGallery" element={<GameGallery />} />
            <Route path="/Friends" element={<Friends />} />
            <Route path="/Account" element={<Account />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/notFound" element={<Notfound />} />
            <Route path="/gameGallery/game/:gameid" element={<GameDetails />} />
            <Route path='/LogOut' element={<Logout />} />
            <Route path='/LogOut' element={<Logout />} />
            <Route path="/collection/user/" element={<GameCollection />} />
            <Route path="/wishlist/user/" element={<Wishlist />} />
          </Routes>
        </div>
      </Router>
      </WishContextProvider>
    </CollectionContextProvider>
    </GamesContextProvider>
    </FriendsContextProvider>
    </UserContext.Provider>
    
    
);
}


export default App;