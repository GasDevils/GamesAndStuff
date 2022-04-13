import './App.css';

import React from 'react';

import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import {Routes, Route, Link} from 'react-router-dom';

const App = () => {
  return (
      <div className="App">
        <Routes>
          <Route exact path ='/'>
            <Navbar />
            <Home />
          </Route>
        </Routes>
      </div>
);
}

export default App;