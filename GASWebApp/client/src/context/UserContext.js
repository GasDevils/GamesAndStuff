import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserContextProvider = (props) => {
    const[gamer, setGamer] = useState([]);

    return(
        <UserContext.Provider value={{gamer, setGamer}}>
            {props.children}
        </UserContext.Provider>
    );
};