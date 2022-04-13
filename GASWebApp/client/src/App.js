import './App.css';

import React from 'react';

//to import container folder and component folder
import {Footer, Blog, Possibility, Features, WhatGAS, Header} from './containers'
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Link1 from './Link1';
import Link2 from './Link2';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="App">
      <Navbar />
        <Switch>
          <Route exact path ='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
);
}

export default App;

/*
<div className="App">
     <div className="gradient__bg">
       <Navbar />
      <Home />
      <Link1 />
      <Link2 />

     </div>
  </div>

  
*/