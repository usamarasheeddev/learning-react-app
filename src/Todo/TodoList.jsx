import React from 'react'
// here we use todolist becuase we want to get the data into this file so we use props within the home component
export default function TodoList({currentObject}) {
  return (
    <div>
      {
        currentObject.todo
      }
    </div>
  )
}
