import React from 'react'
import { useContext } from 'react'
import {UserDataContext} from '../context/UserContext'

const Navar = () => {

const data =  useContext(UserDataContext)
console.log(data)
  

  return (
    <div className='h-10 w-full bg-emerald-600'>
      <h1>This is hello {data}</h1>
      
    </div>
  )
}

export default Navar

