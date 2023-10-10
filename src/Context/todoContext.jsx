import React from "react";
import { createContext, } from "react";

export const TodoContext = createContext()



export default function TodoContextProvider({ children }) {
    const [todos, setTodos] = React.useState([])

    return (

        < TodoContext.Provider value={{ todos, setTodos}}>

            {children
            // root file
            }

            
        </ TodoContext.Provider>

    )

}