import {React, userState, createContext} from "react";

export const GamesContext = createContext();

export const GamesContextProvider = (props) => {
    const[games, setGames] = userState([]);

    return(
        <GamesContext.Provider value={{games, setGames}}>
            {props.children}
        </GamesContext.Provider>
    );
};