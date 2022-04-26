import React, { useState, createContext } from "react";

export const CollectionContext = createContext();

export const CollectionContextProvider = (props) => {
    const[collection, setCollection] = useState([]);
    const [selectedCollection, setSelectedCollection] = useState({});

    return(
        <CollectionContext.Provider value={{
            collection, setCollection,
            selectedCollection, setSelectedCollection}}>
            {props.children}
        </CollectionContext.Provider>
    );
};