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
            <Route path="/gameGallery/:id" element={<GameDetails />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </div>
      </Router>
    </GamesContextProvider>
    </FriendsContextProvider>
    </UserContext.Provider>
    
);
}


export default App;