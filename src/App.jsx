import React from 'react'
import Todo from './Todo'
import { useContext } from 'react'
import { TodoContext } from './Context/todoContext'
export default function App() {

  // const{todos,setTodos}=useContext(TodoContext)

  // React.useEffect(()=>{
  //   console.log(todos)
  // },[todos])
  return (
    <div>
    
{/* 
<button
onClick={()=>setTodos([...todos,'helo'])}
>context button</button> */}

      <Todo />
    </div>
  )
}
