import React from 'react'
import TodoList from './TodoList'

export default function Todos({ todos, setTodos }) {
    // console.log(todos)
    return (
        <div>
            <h3>Todo List</h3>

            <div>

            {/* we use mapping function here to bring the current object into the todolist */}
                    {/* we can give any name to the map function:here currentobject is the name of the map function */}

                {
                    todos.map((currentObject) => {


{/* by using console.log we can bring the output on page and also in the console */}
{/* console.log(currentObject) */}
                        {/* return <p key={currentObject.todo} >{currentObject.todo}</p> */}
                        return <TodoList key={currentObject.todo}   currentObject={currentObject} />
                    })
                }
            </div>
        </div>
    )
}
