import React from 'react'
import '../App.css'

// export default function Home(Props) {
// const {data,setData}=Props
export default function Home({data,setData}) {


  const [creds, setCreds] = React.useState('')

  const handleChange = (e) => {

    setCreds((creds)=>({...creds,[e.target.name]:e.target.value}))
  }



  const handleSubmit = (e) => {
    e.preventDefault()
console.log(data)
    // console.log(creds)
    setData(creds)
  }




  return (
    <div >
    <h2>home</h2>
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
