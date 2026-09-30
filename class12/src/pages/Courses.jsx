import React from 'react'
import { Outlet } from 'react-router-dom'
// import { Link } from 'react-router-dom'

const Coures = () => {
  return (
    <div>
      <div className='sale'>
        <p>Sale is live!!!</p>
        <p>Sale is live!!!</p>
        <p>Sale is live!!!</p>
        <p>Sale is live!!!</p>
        <p>Sale is live!!!</p>
        <p>Sale is live!!!</p>
        <p>Sale is live!!!</p>
        <p>Sale is live!!!</p>
      </div>
      {/* <Link to ="/courses/kodex">Kodex</Link> */}
      <Outlet/>

      
    </div>
  )
}

export default Coures
