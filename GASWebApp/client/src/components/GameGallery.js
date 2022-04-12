import './App.css';

//to import container folder and component folder
import {Footer, Blog, Possibility, Features, WhatGAS, Header} from './containers'
import {CTA, Brand, Navbar} from './components';

function GameGallery() {
  return (
	<div className="GameGallery">
     <div className="gradient__bg">
      <Navbar />
      <p class="display-text"> LOTS OF GAMES! </p>
     </div>
  </div>
);
}

export default GameGallery;
