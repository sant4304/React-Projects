// import React, { useEffect, useState } from 'react'

// const App = () => {

//   //useEffect :- its doing side stack task
//   //racact :- its was loding the ui in frontend and useEffect working as side stack

  // const [count, setCount] = useState(0)

//   // useEffect(function(){
//   //   console.log("heloo")
//   // })

//   const [title,setTitle] = useState("")
//   useEffect(function(){
//     console.log("UI is runing")
//   },[count])


//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={()=>{
//         setCount(count +1)
//       }}>Inc</button>

//       <input type="text" value={title} onChange={(e)=>{
//         setTitle(e.target.value)
//       }} />

//

//     </div>
//   )
// }

// export default App
/*************************************************************************************/ 

// import React, { useEffect, useState } from 'react'

// const App = () => {
//   const [number , setNumber] = useState(0)
//   const [number2 , setNumber2] = useState(0)
//   const [number3 , setNumber3] = useState(0)

//   useEffect(()=>{
//     console.log("UseEffect is running")
//   },[number])


//   return (
//     <div>
//       <h1>{number}</h1>
//       <button onClick={()=>{
//         setNumber(Math.floor(Math.random()*100))
//       }}>Num1</button>

//       <h1>{number2}</h1>
//       <button onClick={()=>{
//         setNumber2(Math.floor(Math.random()*100))
//       }}>Num1</button>

//       <h1>{number3}</h1>
//       <button onClick={()=>{
//         setNumber3(Math.floor(Math.random()*100))
//       }}>Num1</button>



//     </div>
//   )
// }

// export default App

/****************************************************************************/

// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// const App = () => {

//   const [text, setText] = useState("")
//   async function getdata(){
//     const response = await axios.get('https://pokeapi.co/api/v2/pokemon')
//     console.log(response.data)
//   }


//   useEffect(function(){
//       getdata()
//   })
//   return (
//     <div>
//       <input type="text" value={text} onChange={(e)=>{
//         setText(e.target.value)
//       }} />
//     </div>
//   )
// }

// export default App


/***************************************************************************************/

// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// const App = () => {

//  const [allPokemn, setallPokemn] = useState([])


//  const getdata = async () =>{
//    let response = await axios.get('https://pokeapi.co/api/v2/pokemon')
//   //  console.log(response.data.results)
//    setallPokemn(response.data.results)
//  }

  
//   useEffect(function(){
//       getdata()
//   },[])
//   return (
//     <div>
//       <button onClick={getdata}>Click</button>
//       {allPokemn.map((elem,idx)=>{
//         return(
//         <div>
//           <h1 key={idx}>{elem.name}</h1>
//         </div>
//         )
//       })}
//     </div>
//   )
// }

// export default App

/****************************************************/

import React, { useEffect, useState } from 'react'

import axios from 'axios'

const App = () => {

   const [user, setUser] = useState('')
   const [num, setNum] = useState(0)


 const getdata = async () =>{
   let response = await axios.get('https://randomuser.me/api/')
  //  console.log(  (response.data.results[0].name.first) +" "+(response.data.results[0].name.last)  )
   setUser((response.data.results[0].name.first) +" "+(response.data.results[0].name.last))
 }
useEffect(function(){
  getdata()
},[num])
  return (
    <div>
      <h1>{user}</h1>
      <h1>{num}</h1>
      <button onClick={()=>{
        setNum(num +1 )
      }}
      
      >Click</button>

      
    </div>
  )
}

export default App 