import './App.css';
import React from 'react';

//to import container folder and component folder
import {Footer, Blog, Possibility, Features, WhatGAS, Header} from './containers'
import {CTA, Brand, Navbar} from './components';


import Login from './Login';
import Friends from './Friends';
import MyAccount from './MyAccount';
import GameGallery from './GameGallery';
import {Route, Link} from 'react-router-dom';

function App(){
  return(
    <div>
      <div className="App">
        <div>
          <Navbar />
        </div>



      </div>
    </div>

  );
  
}

export default App;
