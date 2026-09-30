import React from 'react'
import { NavLink } from 'react-router-dom'
const Navar = () => {
  return (
    <div className='nav'>
       <NavLink to="/" 
        style={({isActive})=>({
          color:isActive ? "red":"black"
        })}
       >Home</NavLink>

       <NavLink to="/about"
        style={({isActive})=>({
          color:isActive ? "red":"black"
        })}
       >About</NavLink>
       <NavLink to="/courses"
        style={({isActive})=>({
          color:isActive ? "red":"black"
        })}
       >Courses</NavLink>
    </div>
  )
}

export default Navar