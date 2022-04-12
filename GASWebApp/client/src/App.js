import './App.css';

//to import container folder and component folder
import {Footer, Blog, Possibility, Features, WhatGAS, Header} from './containers'
import {CTA, Brand, Navbar} from './components';

function App() {
  return(
	<div className="App">
     <div className="gradient__bg">
      <Navbar />

     </div>
  </div>
);
}

export default App;
