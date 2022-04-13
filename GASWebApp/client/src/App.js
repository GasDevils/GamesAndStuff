import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'; //BrowserRouter is the router for the entire application 

import Home from './components/home/Home';
import GameGallery from './components/gameGallery/GameGallery';
import Friends from './components/friends/Friends';
import Account from './components/account/Account';

const App = () => {
  return (  
    <Router>
      <Navbar />
      <div className='App'>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/gameGallery" element={<GameGallery />} />
          <Route path="/Friends" element={<Friends />} />
          <Route path="/Account" element={<Account />} />
        </Routes>
      </div>
    </Router>
);
}

export default App;