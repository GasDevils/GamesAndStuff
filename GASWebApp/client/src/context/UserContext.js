import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserContextProvider = (props) => {
    const[user, setUser] = useState([]);

    return(
        <GamesContext.Provider value={{games, setGames}}>
            {props.children}
        </GamesContext.Provider>
    );
};