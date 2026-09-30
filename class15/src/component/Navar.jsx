import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'


const Navar = () => {
  const [theme,setTheme] = useContext(ThemeDataContext)
  return (
    <div className='nav'>
      <h1>Hello </h1>
      <h2>{theme}</h2>
      <button onClick={()=>{
        if(theme ==='light'){
          setTheme('dark')
        }else{
          setTheme("light")
        }
      }}>Change Theme</button>
    </div>
  )
}

export default Navar
