import React from 'react'
import './App.css'

export default function Home() {

  const [creds, setCreds] = React.useState('')

  const handleChange = (e) => {

    setCreds((creds)=>({...creds,[e.target.name]:e.target.value}))
  }



  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(creds)
  }



  return (
    <div >
      <form onSubmit={(e) => handleSubmit(e)}>

        <input placeholder='name' type='text' name='name' onChange={(e) => handleChange(e)} />
        <br />
        <input placeholder='phone' type='text' name='phone' onChange={(e) => handleChange(e)} />
        <br />
        <input placeholder='email' type='text' name='email' onChange={(e) => handleChange(e)} />
<input type="text" placeholder='password' onChange={(e)=> handleChange(e)} />
        <button type='submit' >submit</button>
      </form>
    </div>
  )
}
