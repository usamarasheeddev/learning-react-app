import React from 'react'
// import Home from './Home/Home'
import Todos from './Todos'
import { useContext } from 'react'
import { TodoContext } from '../Context/todoContext'
import toast from 'react-hot-toast'
import { uid } from 'uid'
// install autoimport extension to import the file automatically
export default function Index() {
  //single todo to be added
  //create a state of todo for a single todo 
  const { todos, setTodos, currentTodo, EditTodo } = useContext(TodoContext)
  const [todo, setTodo] = React.useState(currentTodo?.todo && '')

  //group of todo
  //array of added todos:here array is used coz we have a list of todos so we use array
  // const [todos, setTodos] = React.useState([])






  const addTodo = () => {
    // when we use console.log the input appears i the console
    // console.log([...todos,todo])

    // ?
    // setTodos([...todos,todo])


    // settodos displays the input on the page 
    // in the settodos we firstly jse spread operator coz it is an array , we open the array and add comma, then we create an object of todo:todo
    // the todo in darkblue is a variable
    setTodos([...todos, { todo: todo, id: uid() }])

    // localStorage.setItem('todos', [...todos, { todo: todo }])

    // console.log([...todos, { todo: todo }])
    let stringTodos = JSON.stringify([...todos, { todo: todo, id: uid() }])
    // console.log(stringTodos)
    localStorage.setItem('todos', stringTodos)

    // tis is used to empty the state of settodo:each time an input is entered and pushed into the todo list the input field becomes empty
    setTodo('')
    toast.success('Todo added`')


  }



  React.useEffect(() => {

    let value = localStorage.getItem('todos') && JSON.parse(localStorage.getItem('todos'))
    setTodos(value ? value : [])


  }, [])



  React.useEffect(() => {
    setTodo(currentTodo?.todo)
  }, [currentTodo])



  const clearLocalStorage = () => {
    localStorage.clear()
    setTodos([])
  }

  return (
    // we give styling to the div in curly brackets and the styling will only apply on the div and not the whole page
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
      <h2>Todo</h2>

      <div>

        {/* here we use value to make the input field emty after every input */}
        {/* onchange is used to bring the settodovalue in array */}
        <input placeholder='add todo' value={todo} type='text' onChange={(e) => setTodo(e.target.value)} />

        {/* here we use addtodo event on button to add the input into the interface */}



        {currentTodo ? <button onClick={() => EditTodo(todo)}>Edit Todo</button> :
          <button onClick={() => addTodo()}>Add Todo</button>

        }


      </div>
      {/* these are props that we use to get and set the todolist and we will use props in the todo file */}
      <Todos />


      {/* <button onClick={()=>clearLocalStorage()}>Clear todo</button> */}
    </div>
  )
}


