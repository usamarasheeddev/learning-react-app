import React from "react";
import { createContext, } from "react";

export const TodoContext = createContext()



export default function TodoContextProvider({ children }) {
    const [todos, setTodos] = React.useState([])
    const [currentTodo, setcurrentTodo] = React.useState(null)


    const SetTodoValue = (param) => {
        setcurrentTodo(param)
    }



    const EditTodo = (newTodo) => {
      

        setTodos(


        todos.map(item => {
            if (item.id === currentTodo.id) {
                return { ...item, todo: newTodo }
            }

            return item
        })


        
        )



localStorage.setItem('todos',JSON.stringify(
    todos.map(item => {
        if (item.id === currentTodo.id) {
            return { ...item, todo: newTodo }
        }

        return item
    })
    ))

    }




    const DeleteTodo = (params) => {
        console.log(params)
        // todos.map((todo, i) => {
        //     if (i === params) {
        //         // console.log(todo)
        //         // console.log(todos.splice(params, 1)) 
        //         const newArray = [...todos.slice(0, params), ...todos.slice(params + 1)];
        //         setTodos(newArray)
        //         localStorage.setItem("todos", JSON.stringify(newArray))

        //     }
        // })


        setTodos(todos.filter(item => item.id != params.id))
        localStorage.setItem("todos", JSON.stringify(todos.filter(item => item.id != params.id)))



    }


    return (

        < TodoContext.Provider value={{ todos, setTodos, EditTodo, DeleteTodo, currentTodo, setcurrentTodo, SetTodoValue }}>

            {children
                // root file
            }


        </ TodoContext.Provider>

    )

}