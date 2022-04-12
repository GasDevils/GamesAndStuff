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

          <Navbar />

      </div>
    </div>

  );
  
}

export default App;

/*
        <Route exact path="/" component={App} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/gamegallery" component={GameGallery} />
        <Route exact path="/myaccount" component={MyAccount} />
        <Route exact path="/friends" component={Friends} />
*/