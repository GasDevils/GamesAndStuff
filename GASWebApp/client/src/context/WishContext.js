import React, { useState, createContext } from "react";

export const WishContext = createContext();

export const WishContextProvider = (props) => {
    const [Wish, setWish] = useState([]);
    const [selectedWish, setSelectedWish] = useState({});

    return(
        <WishContext.Provider value={{
            Wish, setWish,
            selectedWish, setSelectedWish}}>
            {props.children}
        </WishContext.Provider>
    );
};