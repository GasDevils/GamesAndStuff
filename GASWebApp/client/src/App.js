import './App.css';

import React from 'react';

import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className='App'>
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