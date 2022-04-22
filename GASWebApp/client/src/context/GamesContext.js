import React, { useState, createContext } from "react";

export const GamesContext = createContext();

export const GamesContextProvider = (props) => {
    const[games, setGames] = useState([]);

    return(
        <GamesContext.Provider value={{games, setGames}}>
            {props.children}
        </GamesContext.Provider>
    );
};