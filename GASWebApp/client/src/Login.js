import './App.css';

//to import container folder and component folder
import {Footer, Blog, Possibility, Features, WhatGAS, Header} from './containers'
import {CTA, Brand, Navbar} from './components';

function Login() {
  return (
	<div className="Login">
     <div className="gradient__bg">
      <Navbar />
      <p class="display-text"> LOGIN PAGE </p>
     </div>
  </div>
);
}

export default Login;
