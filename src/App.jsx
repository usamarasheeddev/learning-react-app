import React from "react";
import './App.css'

export default function App() {

  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [lastName, setLastName] = React.useState("")



  const formsubmit = (e) => {
    // this stops the page from reloading
    e.preventDefault();
    console.log('name:' + name)
    console.log('lname:' + lastName)
    console.log("my email is:" + email)
    // console.log("my password is:")
  }

  // declare variable using callback function/arrow function

  const fname = (e) => {


    // id we use only e it will give us how many times an action has perofomed on input field
    // if we write e.taret.value it will provide us with whatever we enter in the field
    // here e is just an alphabet you can use any to call it
    // console.log(e.target.value)

    // for making a value enter in the fname we do
    // setName(e.target.value)
    // console.log(e.target.value)


  }
  const lname = (e) => {
    // console.log(e.target.value)
  }

  const email1 = (e) => {
    // console.log(e.target.value)
  }
  const passcode = (e) => {
    // console.log(e.target.value)

  }


  return (
    // in the return i take input fields of a form
    // these arrows is the main div and it contains divs inside it bcz we cannot make more than one main div
    <>

      <form onSubmit={(e) => formsubmit(e)}>

        <div className='heading'>
          <h1>form</h1>
        </div>


        <div className='input-1'>
          <label htmlFor="">fname</label>
          <input type="text" onChange={(e) => setName(e.target.value)} />
        </div>



        <div className='input-1'>
          <label htmlFor="">lname</label>
          <input type="text" onChange={(e) => setLastName(e.target.value)} />
        </div>

        <div className='input-2'>
          <label htmlFor="">e-mail</label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
        </div>

        

        <div className="button">
          <button type='submit'>login</button>
        </div>
      </form>










    </>
  )

}