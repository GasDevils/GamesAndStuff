import './App.css';

//to import container folder and component folder
import {Footer, Blog, Possibility, Features, WhatGAS, Header} from './containers'
import {CTA, Brand, Navbar} from './components';
import Home from './Home';
import Link1 from './Link1';
import Link2 from './Link2';
import {Route, Link} from 'react-router-dom';

function App() {
  return (
	<div className="App">
     <div className="gradient__bg">
       <Route exact path="navbar" component={Navbar} />
       <Route exact path="/" component={Home} />
       <Route exact path="/link1" component={Link1} />
       <Route exact path="/link2" component={Link2} />


     </div>
  </div>
);
}

export default App;
