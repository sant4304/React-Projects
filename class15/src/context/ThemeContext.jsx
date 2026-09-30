import React, { createContext, useState } from 'react'


export const ThemeDataContext = createContext()

const ThemeContext = (props) => {

  const [theme, setTheme] = useState('Light')

  const data = "Sharthak"
  return (
    <ThemeDataContext.Provider  value={[theme,setTheme]}>

              {props.children}    
    </ThemeDataContext.Provider>
  )
}

export default ThemeContext