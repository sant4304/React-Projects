// import React from 'react'
// import { useState } from 'react';

// const App = () => {
//     const [a, seta] = useState(0)

  
//     // const btnClicked =()=>{
//     //    seta(a+1)
//     // }
//    const btnclicked =()=>{
//     seta(prev =>{
//         if(prev >=10){
//             return prev
//         }
//         else{
//           return  prev+1
//         }
//     })
//    }
//     const [king, setKing] = useState("Sam")
//     const click =()=>{
//       setKing("Rahul")
//     }
//   return (

//     <div>

//         <h1>{a}</h1>
//         <button onClick={btnclicked}>Increase</button>
//         <h1>{king}</h1>
//         <button onClick={click}>Change</button>
//     </div>
//   )
// }

// export default App

/*************************************************/ 

// import React, { useState } from 'react'

// const App = () => {

//   const [num, setNum] = useState(0)
//   return (
//     <div>
//       <h1>{num}</h1>
//       <button onClick={()=>{
//         setNum((prev) =>{
//           return  prev +10
//         })
//       }}>Click</button>
//       </div>
//   )
// }

// export default App

/******************************************/

// import React, { useState } from 'react'

// const App = () => {

//   const [num, setNum] = useState(0)
//   return (
//     <div>
//       <div className='box'>{num}</div>
//       <button onClick={()=>{
//         const rdm = Math.floor(Math.random()*100)
//         setNum(rdm)
//       }}>CLick Me</button>
//     </div>
//   )
// }

// export default App

/******************************************************************************/ 

// import React,{useState} from 'react'

// const App = () => {

//   const arr = ["Sartha","harsh","ajay","ankit","hitesh"]

//   const [num, setNum] = useState(0)
//   return (
//     <div>
//        <p>{arr[num]}</p>
//        <button onClick={()=>{
//           if(num<arr.length-1){
//             console.log(num)
//             setNum(num+1)
//           }
//        }}>Change User</button>
//     </div>
//   )
// }



// export default App



/******************************************************************************************************************/

// import React from 'react'

// const App = () => {

//   let marks  =[88,76,90,67,28]

//   // const graceStudent = ()=>{
//   //  let mark = marks.map((ele)=>{
//   //      ele +5
//   //   })
//   //   console.log(mark)
//   // }

//   const graceStudent=()=>{
//     // const mar = marks.indexOf(28)
//       //  console.log(mar)
//        marks[4] = marks[4] +5
//        console.log(marks)
//   }
//   return (
//     <div>

//       <p>
//         {marks.map((ele,idx)=>{
//           return(
//             <>
//             <h1 key={idx}>{ele}  and {idx+1}</h1>
//             </>
//           )
//         })}
//       </p>
//       <button onClick={graceStudent}>Give grace</button>
//     </div>
//   )
// }

// export default App

/***************************************************/
// import React, { useState } from 'react'

// const App = () => {

//   const [marks, setMarks] = useState([60,55,89,12,29])
//   function graceStudent(){
//     // console.log("de diyaa")
//     const newMarks = marks.map((ele)=> {
//       if(ele>95){
//         return ele
//       }
//       else{
//         return ele +5
//       }
//     })
//       console.log(newMarks)
//       setMarks(newMarks)
//   }

//   return (
//     <div>
//       {marks.map((ele,idx)=>{
//          return (
//           <>
//           <h1>Student {idx+1} marks {ele}  ({ele >33 ? "Pass":"Fail"})</h1>
//           </>
//          )
//       })}
//       <button onClick={graceStudent}>Grace Marks</button>

//     </div>
//   )
// }

// export default App 


/**************************************************************************************/

import React, { useState } from 'react'
import Male from './component/Male'
import Female from './component/Female'

const App = () => {
    const [gender, setGender] = useState("Male")

  function changeGender(){
     if(gender=="Male"){
      setGender("Female")
     }
     else{
      setGender("Male")
     }
  }

  return (
    <div>
      <h1>{gender}</h1>
      <button onClick={changeGender}>Change Gender</button>
      {gender== "Male"?<Male/>:<Female/>}
    </div>
  )
}

export default App