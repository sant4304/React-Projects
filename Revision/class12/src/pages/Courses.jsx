import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Courses = () => {
  return (
    <div>
        <h1>Courses Page</h1>

        {/* <div className='cou'>
          <NavLink to="/courses/Koder">Koder</NavLink>
          <NavLink to="/courses/Kodex">Kodex</NavLink>

        </div> */}
        <div className='sale'>
            <p>Sale is Live!!!</p>
            <p>Sale is Live!!!</p>
            <p>Sale is Live!!!</p>
            <p>Sale is Live!!!</p>
            <p>Sale is Live!!!</p>
            <p>Sale is Live!!!</p>
            <p>Sale is Live!!!</p>
        </div>

        <Outlet/>
    </div>
  )
}

export default Courses