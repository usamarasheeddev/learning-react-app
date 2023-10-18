import React from 'react'
import TodoList from './TodoList'
import { useContext } from 'react'
import { TodoContext } from '../Context/todoContext'
export default function Todos() {
    const {todos}=useContext(TodoContext)
    // console.log(todos)
    return (
        <div>
            <h3>Todo List</h3>

            <div>

            {/* we use mapping function here to bring the current object into the todolist */}
                    {/* we can give any name to the map function:here currentobject is the name of the map function */}

                {
                    todos.map((currentObject,i) => {

                        return <TodoList key={currentObject.todo}  index={i}  currentObject={currentObject}  />
                    })
                }
            </div>
        </div>
    )
}
