import React, { useContext } from 'react'
import {UserDataContext} from '../context/UserContext'
const Section = () => {

 const da =  useContext(UserDataContext)
    
  return (
    <div className="flex-1 bg-red-900">
      <h1 className="text-xl text-white">All Section {da}</h1>
     
    </div>
  )
}

export default Section
