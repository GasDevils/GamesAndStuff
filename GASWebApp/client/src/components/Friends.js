import './App.css';

//to import container folder and component folder
import {Footer, Blog, Possibility, Features, WhatGAS, Header} from './containers'
import {CTA, Brand, Navbar} from './components';

function Friends() {
  return (
	<div className="Friends">
     <div className="gradient__bg">
      <Navbar />
      <p class="display-text"> None </p>
     </div>
  </div>
);
}

export default Friends;
