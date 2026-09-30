import React, { useState } from 'react'
import axios from 'axios'
import User from './component/User'

const App = () => {

  const [allData, setallData] = useState([])
   const getData = async()=>{
    let response =  await axios.get('https://jsonplaceholder.typicode.com/users')
    setallData(response.data)
    console.log(response.data)
  }
  return (
    <div>
      <button onClick={()=>{
        getData()
      }}>Get Data</button>

      <div className='all-cards'>
        {allData.map(function(elem,idx){
        return(
          // <div key={idx}>

          //   <h1 >Hello {elem.name} {idx+1}</h1>
          // </div>
          <div key={idx}>
          <User  elem={elem}/>
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default App