import './App.css';

//to import container folder and component folder
import {Footer, Blog, Possibility, Features, WhatGAS, Header} from './containers'
import {CTA, Brand, Navbar} from './components';

function MyAccount() {
  return (
	<div className="MyAccount">
     <div className="gradient__bg">
      <Navbar />
      <p class="display-text"> YOUR PROFILE! </p>
     </div>
  </div>
);
}

export default MyAccount;
