import React from 'react'
import Navbar from '../navbar/Navbar'
import './account.css'

const Account = () => {

    return(
        
        <div>
        
        <Navbar></Navbar>
        
            <div class="content-profile-page">
                <div class="profile-user-page card">
                    <div class="img-user-profile">
                        <img class="profile-bgHome" src="https://media.discordapp.net/attachments/823697744022470658/963600612627476500/gamerBanner2.png?width=873&height=270" />
                        <img class="avatar" src="https://media.discordapp.net/attachments/823697744022470658/963595725181177877/b8fe2363a39908a287e1a29c136202c9.png?width=415&height=415" alt="GamerPic"/>
                    </div>

                    <button>+ Friend</button>

                    <div class="user-profile-data">
                        <h1>Username</h1>
                    </div> 
                        
                    <div class="description-profile">I am an Arizona State University student. I love board games, tabletop games, and pizza!
                    </div>
                    
                    <ul class="data-user">
                        <li><a><strong>Games</strong><span>3390</span></a></li>
                        <li><a><strong>Wishlist</strong><span>718</span></a></li>
                        <li><a><strong>Friends</strong><span>239</span></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Account;