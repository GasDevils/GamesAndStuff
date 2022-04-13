import './App.css';

import React from 'react';

import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path ='/'>
            <Navbar />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
);
}

export default App;