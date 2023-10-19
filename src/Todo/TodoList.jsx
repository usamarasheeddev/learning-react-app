import React from 'react'
import { FiEdit } from 'react-icons/fi'
import { MdDelete } from 'react-icons/md'
import { useContext } from 'react'
import { TodoContext } from '../Context/todoContext'
import toast from 'react-hot-toast'
// here we use todolist becuase we want to get the data into this file so we use props within the home component
export default function TodoList({ currentObject, index }) {
  const {DeleteTodo,EditTodo,SetTodoValue}=useContext(TodoContext)
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '12rem' }}>


      <p>

        {
          currentObject.todo
        }
      </p>
      <span>

        <FiEdit onClick={()=>{
          SetTodoValue(currentObject)
          }
          }  
        
        
        style={{color:'blue',fontSize:'1.2rem' }} />
        <MdDelete   onClick={()=>
        {
        DeleteTodo(currentObject)
        toast.success('Todo Removed')
        }
        } style={{color:'red',fontSize:'1.3rem' }} />
      </span>
    </div>
  )
}
