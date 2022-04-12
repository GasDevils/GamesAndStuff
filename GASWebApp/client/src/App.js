import './App.css';

//to import container folder and component folder
import {Footer, Blog, Possibility, Features, WhatGAS, Header} from './containers'
import {CTA, Brand, Navbar} from './components';
import Home from './Home';
import Link1 from './Link1';
import Link2 from './Link2';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
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