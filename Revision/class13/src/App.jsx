// import React from 'react'
// import axios from 'axios'

// const App = () => {

//   const getData = async()=>{
//     const response = await axios.get('http://localhost:3000/data')
//     console.log(response)

//   }
//   return (

//     <div>
//       <button onClick={()=>{
//         getData()
//       }}>
//         Click Me
//       </button>


//     </div>
//   )
// }

// export default App


// import React from 'react'
// import Navar from './componente/Navar'
// import Allsections from './componente/Allsections'
// import Footer from './componente/Footer'

// const App = () => {
//   const courseData ={
//     courseName :'Web Dev',
//     instrucyor: 'Sam',
//     mentor:"Vikas",
//     month:"6 month"
//   }
//   return (
//     <div>
//       <Navar/>
//       <Allsections courseData={courseData}/>
//       <Footer/> 
//     </div>
//   )
// }

// export default App



import React, { useState } from 'react'
import Navar from './componente/Navar'

const App = () => {
  const [theme, setTheme] = useState("Light")
  const changeTheme = (newTheme)=>{
    setTheme(newTheme)
  }
  return (
    <div>

      <Navar theme={theme} setTheme={setTheme} changeTheme={changeTheme}/>
     
    </div>
  )
}

export default App