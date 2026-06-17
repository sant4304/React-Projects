// import React from 'react'
// import Navar from './component/Navar'
// import Men from './component/Men'
// import Women from './component/Women'
// const App = () => {

//   const user1 ={
//     name:"Rahul",
//     age:20,
//     gender: "male"
//   }

//   const user2 = {
//     name:"Sherya",
//     age : 20,
//     gender : "female"
//   }
//   return (
//     <div>
//       {/* <Navar title="Sharthak" color="red" links= {["Home","About","Acount","Contact"]}/>
//       <Navar title="Rahul" color ="green" links= {["Home","About","Acount","Contact"]}/>
//       <Navar title="Akash"   color="brown" links= {["Home","About","Acount","Contact"]}/> */}

//       {/* <Men/>
//       <Women/> */}
//       {user2.gender=='male'? <Men/>:<Women/>}
//     </div>
//   )
// }

// export default App


import React from 'react'

function buttonclick(){
  console.log("Button is clicked")
}
function double(){
  console.log("double")
}

const App = () => {
  return (
    <div>
      
      <button 
      onClick={buttonclick}
      onDoubleClick={()=>{
        double()
      }}
      onBeforeToggle={double}
      className='bg-emerald-500 px-6 py-3 text-white font-bold rounded active:scale-95 active:bg-red-500'>Download</button>
    </div>
  )
}

export default App

