import React from 'react'
import { useContext } from 'react'
import {UserDataContext} from '../context/UserContext'
const Footer = () => {
 const da =  useContext(UserDataContext)
  return (
    <div>
      <h1 className='absolute bottom-0.5 w-screen h-10 bg-amber-500'> This is Footer {da}</h1>

    </div>
  )
}

export default Footer
