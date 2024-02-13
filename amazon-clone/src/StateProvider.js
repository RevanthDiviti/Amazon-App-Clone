import React, { Children, createContext, useContext, useReducer} from "react";

// prepares the dataLayer
export const StateContext = createContext();

// wrap our app and provide the data layer
export const StateProvider =({reducer,initalState, children}) =>(
    <StateContext.Provider value={useReducer(reducer,initalState)}>
        {children}
    </StateContext.Provider>
);

//pull information from the data layer
export const useStateValue = () => useContext (StateContext);