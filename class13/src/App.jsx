// import React, { useState } from 'react'
// import { Navar } from './componets/Navar'
// import { Allsection } from './componets/Allsection'
// import { Footer } from './componets/Footer'

// const App = () => {

//   // const user = "Rahul"

//   // const coursreData = {
//   //   cousreName :"Chort",
//   //   instructor:"Sharthak",
//   //   mentot :"Anubhav",
//   //   duration :"6 month"
//   // }

//   const [newTheme, setnewTheme] = useState('')

//   const [theme,setTheme] = useState("Light")

//   const changeTheme =()=>{
//     setTheme()
//   }
//   return (
//     <div className='bg-black h-screen text-white text-5xl'> 
//        {/* <h1>{user}</h1> */}
//        <Navar  theme ={theme} setTheme={setTheme}/>
//        {/* <Allsection coursreData ={coursreData}/> */}
//        {/* <Footer/> */}

//        <form onClick={(e)=>{
//          e.preventDefault()
//          console.log(newTheme)
//          setTheme('')
//        }}>
//         <input type="text" placeholder='Enter Your Name' 
//         value={newTheme}
//         onChange={(e)=>{
//           setnewTheme(e.target.value)
//         }}/>
//         <button>Submit</button>
//        </form>
//     </div>
//   )
// }

// export default App
/*****************************************************************************************/

import React, { useState } from 'react'
import { Navar } from './componets/Navar'
import { Allsection } from './componets/Allsection'
import { Footer } from './componets/Footer'

const App = () => {

  const user = "Rahul"

  const coursreData = {
    cousreName :"Chort",
    instructor:"Sharthak",
    mentot :"Anubhav",
    duration :"6 month"
  }



  const [theme,setTheme] = useState("Light")

  const changeTheme =(newTheme)=>{
    setTheme(newTheme)
  }
  return (
    <div className='bg-black h-screen text-white text-5xl'> 
       <h1>{user}</h1>
       <Navar  theme ={theme} changeTheme={changeTheme}/>
       <Allsection coursreData ={coursreData}/>
       <Footer/>

       
    </div>
  )
}

export default App
