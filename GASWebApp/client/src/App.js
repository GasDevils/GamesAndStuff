import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Login from './components/login/Login';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'; //BrowserRouter is the router for the entire application 

import GameGallery from './components/gamegallery/GameGallery';
import Friends from './components/friends/Friends';
import Account from './components/account/Account';
import Notfound from './components/notfound/Notfound';
import { GamesContextProvider } from './context/GamesContext';

const App = () => {
  return (  
    <GamesContextProvider>
      <Router>
      <Navbar />
        <div className='App'>
          <Routes>
            <Route path="/" exact element={<Login />} />
            <Route path="/gameGallery" element={<GameGallery />} />
            <Route path="/Friends" element={<Friends />} />
            <Route path="/Account" element={<Account />} />
            <Route path="/notFound" element={<Notfound />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
          

        </div>
      </Router>
    </GamesContextProvider>
    
);
}


export default App;