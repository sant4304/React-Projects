import React from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { increment } from './redux/slices/counterSlices'
import { changeThemeToDark, changeThemeToLight } from './redux/slices/themeSlice'

const App = () => {

  const num = useSelector((state)=>state.counter.value)
  const theme = useSelector((state)=>state.theme.value)  
  const dispatch = useDispatch()
  return (
    <div>
      <h1>{num}</h1>
      <button
      onClick={()=>{
        dispatch(increment())
      }}
      >increment</button>
      <button>Decrement</button>

      <br />
      <p>{theme}</p>
      <button onClick={()=>{
        dispatch(changeThemeToLight())
      }}>light</button>


      <button onClick={()=>{
      dispatch(changeThemeToDark())
      }}>dark</button>
    </div>
  )
}

export default App