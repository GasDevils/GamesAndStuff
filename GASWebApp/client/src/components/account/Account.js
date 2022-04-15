import React from 'react'
import {NavLink} from 'react-router-dom';

import './account.css';

const Account = ()=>{
    
    return(
<div class="user-wrap">
  <div class="container">
    <div class="profileHeader">
      <div class="profileBanner" style="background-image: url('https://media.discordapp.net/attachments/823697744022470658/963600612627476500/gamerBanner2.png?width=873&height=270');"></div>
    </div>
    <div class="col-md-3">
      <div class="leftBar">
        <div class="user-sidebar">
          <div class="user-avatar">
            <img src="https://media.discordapp.net/attachments/823697744022470658/963595725181177877/b8fe2363a39908a287e1a29c136202c9.png?width=437&height=437" style="width: 100%;border-top-left-radius: 3px;border-top-right-radius: 3px;">
            </img>
            <div class="change-photo hidden-xs">
              <div class="camera-icon" data-toggle="modal" data-target="#modal-normal"><i class="material-icons li-vertical"></i><span class="editPhoto"> Add friend</span></div>
            </div>

          </div>

          <div class="user-sidebar-bottom">
            <h3>Username</h3>
          </div>

          <div class="panel panel-default">
            <div class="panel-heading">
              About Me
            </div>
            <div class="panel-body">

              <p>I am a student at Arizona State University. I love video games, board games, and pizza!</p>
            </div>
          </div>


          <div class="panel panel-default">
            <ul class="list-group">



            </ul>
          </div>

        </div>
      </div>
    </div>
    <div class="col-md-9">

      <div class="rightBarTop">
        <div class="panel panel-default">

          <div class="tabs-heading">
            <ul class="nav nav-tabs" role="tablist">
              <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Games <span id="bold">(14)</span></a></li>
              <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Wishlist <span id="bold">(12)</span></a></li>
              <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">Friends(1)</a></li>
              
            </ul>
          </div>
          <ul class="list-group">
            <div class="panel-block-header">
              <ul class="panel-block-options">
                <li>
                  <a href="#" id="list" class="btn btn-settings btn-sm" data-original-title="List view" data-toggle="tooltip" data-placement="top" aria-haspopup="true"><span class="glyphicon glyphicon-th-list"></span></a>
                </li>
                <li>
                  
                </li>

              </ul>
              <h3 class="panel-block-title">Latest</h3>
            </div>
            <div class="advanced-search">Hello World</div>
          </ul>
        </div>
      </div>
      
    </div>
  </div>
</div>
   )
}


export default Account;