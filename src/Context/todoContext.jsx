import React from "react";
import { createContext, } from "react";

export const TodoContext = createContext()



export default function TodoContextProvider({ children }) {
    const [todos, setTodos] = React.useState([])
    const [currentTodo, setcurrentTodo] = React.useState(null)


    const EditTodo = (index, param) => {
        console.log(param)
        
        setcurrentTodo(param.todo)
    }



    const DeleteTodo = (params) => {
        // console.log(todos[params])
        todos.map((todo, i) => {
            if (i === params) {
                // console.log(todo)
                // console.log(todos.splice(params, 1)) 
                const newArray = [...todos.slice(0, params), ...todos.slice(params + 1)];
                setTodos(newArray)
                localStorage.setItem("todos", JSON.stringify(newArray))

            }
        })
    }


    return (

        < TodoContext.Provider value={{ todos, setTodos, EditTodo, DeleteTodo, currentTodo, setcurrentTodo }}>

            {children
                // root file
            }


        </ TodoContext.Provider>

    )

}