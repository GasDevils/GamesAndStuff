import React, { useState, createContext } from "react";

export const GamesContext = createContext();

export const GamesContextProvider = (props) => {
    const[games, setGames] = useState([]);
    const [selectedGames, setSelectedGames] = useState({});

    return(
        <GamesContext.Provider value={{
            games, setGames,
            selectedGames, setSelectedGames}}>
            {props.children}
        </GamesContext.Provider>
    );
};