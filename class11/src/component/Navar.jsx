import React from 'react'
import { Link } from 'react-router-dom'

const Navar = () => {
  return (
     <div className='flex justify-between px-8 py-4 bg-pink-900 mb-10'>
        <h2>Navar</h2>
          <div className='flex gap-4'>
            <Link to={"/"}>Home Page</Link>
            <Link to={'/about'}>About Page</Link>
            <Link to={'/product'}>Product Page</Link>
           
            <Link to ={'/course'}>Course</Link>
            
          </div>

      </div>
  )
}

export default Navar
