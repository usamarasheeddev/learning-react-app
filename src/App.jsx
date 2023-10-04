import React from 'react'
import Home from './Home/Home'

export default function App() {

  const [data, setData] = React.useState('empty')

  React.useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <div>

      <h2>app</h2>
      <Home data={data} setData={setData}  />
    </div>
  )
}
