import React, { useState, createContext } from "react";

export const FriendsContext = createContext();

export const FriendsContextProvider = (props) => {
    const[friends, setFriends] = useState([]);

    return(
        <FriendsContext.Provider value={{friends, setFriends}}>
            {props.children}
        </FriendsContext.Provider>
    );
};