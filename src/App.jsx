import React from 'react'
import './App.css'
export default function App() {


  const [value, setValue] = React.useState(0)


  React.useEffect(() => {
    console.log('sideeffect')


  }, [value])


  // React.useLayoutEffect(() => {
  //   console.log('helo')
  // }, [])

  return (
    <div>
      <button onClick={() => setValue(value - 1)}  >-</button>
      <div>{value}</div>
      <button onClick={() => setValue(value + 1)} >+</button>

      <div style={{ width: '3rem', height: '4rem', backgroundColor: 'red' }}>

      </div>
    </div>
  )
}
