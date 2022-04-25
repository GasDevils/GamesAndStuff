import React, { useState, createContext } from "react";

export const GamesContext = createContext();

export const GamesContextProvider = (props) => {
    const[games, setGames] = useState([]);
    const [selectedGame, setSelectedGame] = useState(null);

    return(
        <GamesContext.Provider value={{
            games, setGames,
            selectedGame, setSelectedGame}}>
            {props.children}
        </GamesContext.Provider>
    );
};