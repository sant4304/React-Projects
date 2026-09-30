// import React from 'react'

// export const Navar = (props) => {
//   return (
//     <div>
//         <h1>them is {props.theme}</h1>
//         <button onClick={()=>{
//             props.setTheme('Dark')
//         }}>Click</button>
//     </div>
//   )
// }


/*********************************************************************************************/

import React, { useState } from 'react'

export const Navar = (props) => {

    const [newTheme, setnewTheme] = useState('')

    console.log(props)
  return (
    <div className='nav'>
        <h1>them is {props.theme}</h1>
        <button onClick={()=>{
            // props.setTheme('Dark')
            props.changeTheme(newTheme)
        }}>Click</button>
        <form action=""  onClick={(e)=>{
            e.preventDefault()
            console.log(newTheme)
            setnewTheme('')
        }}>
            <input type="text" placeholder='Enter the theme' 
            value={newTheme}
            onChange={(e)=>{
                setnewTheme(e.target.value)
            }}
           />
            <button >Submit</button>
        </form>
    </div>
  )
}
