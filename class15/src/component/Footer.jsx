import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Footer = () => {

  const data =useContext(ThemeDataContext)
  return (
    <div className='foot'>
      <h1>Footer</h1>
      <h2>{data}</h2>
      {/* <button>Change Theme</button> */}
    </div>
  )
}

export default Footer
