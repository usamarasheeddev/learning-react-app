import React from 'react'
import './App.css'
// import Home from './Home/Home'
// import HomeComponent from './Home/Home'
// import { Home } from './Home/Home'
// import { Home1 } from './Home/Home'
// import NestedHome from './Home/NestedFolder/NestedHome'


export default function App() {

  const [name, setName] = React.useState('default value')

  const handleChange = (e) => {
// console.log(e.target.value)
    setName(e.target.value)
  }

const handleSubmit=(e)=>{
  e.preventDefault()
  // console.log("hleo")
  console.log('name:'+ name)
}


  return (
    <div>
      {/* helo

      <Home/>

      <NestedHome/>


      <div>

      </div> */}


      {/* <input  type='text' onChange={(e) => handleChange(e)} /> */}
      
      <form onSubmit={(e)=>handleSubmit(e)}>

      <input  type='text' onChange={(e) =>setName(e.target.value)} />


      <div>
        <input type="text" onClick={(v) => handleChange(v)} />
      </div>

      <div>
        {/* <button onClick={() => console.log(name)}>hello im using react</button> */}
        <button type='submit'>login</button>
      </div>

      </form>
    </div>



  )

}
