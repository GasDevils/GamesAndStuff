import React from 'react';
import "./game.css";

const Game = () =>{
    return(
        <div className="game">
            <img src="https://cf.geekdo-images.com/micro/img/uhYn0Xn8TZ1vzVfyi4VO1UfNTII=/fit-in/64x64/pic347837.jpg"
            alt="game-logo"/>
            <div className="game-info">
                <p className="game-name">Risk (Revised Edition)</p>
                <p className="game-rating">Rating: 60</p>
            </div>
        </div>
    );
}
export default Game;