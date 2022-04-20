import React from 'react'
import './gamegallery.css'

const GameGallery = () => {
    constructor(){
        super();
        this.state = {
            games: []
        }
    }

    componentDidMount(){
        fetch('/api/games')
        .then(res => res.json())
        .then(games => this.setState({games}, () => console.log('Games fetched...', games)))
    }

    return(
        <div>
            
        </div>
    );
}

export default GameGallery;