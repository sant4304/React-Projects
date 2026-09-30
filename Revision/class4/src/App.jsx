// import React from "react";
// import Navar from "./components/Navar";
// import Women from "./components/Women";
// import Men from "./components/Men";
// const App = () => {
//   const user1 = {
//     name: "Sharthak",
//     age: 30,
//     gender: "male",
//   };

//   const user2 = {
//     name: "Sherya",
//     age: 20,
//     gender: "female",
//   };

//   return (
//     // <div>
//     //   <Navar title="Sam" color="red" links ={["Home","About","Account","Contact"]}/>
//     //    <0avar title="Rahul" color="yellow" links ={["Home","About","Account","Contact"]}/>
//     //     <Navar title="Ko"  color="green" links ={["Home","About","Account","Contact"]}/>
//     // </div>

//     <div>
//       {/* <Men/>
//       <Women/> */}

//       {user1.gender =="male" ?<Men/>:<Women/>}
//     </div>
//   );
// };

// export default App;


import React from 'react'

const App = () => {

const btnClicked =(a)=>{
  console.log("Hellp",a)
}

  return (
    <div>
      <button onClick={()=>btnClicked(10)} className='bg-emerald-600 active:scale-95'>Click to Download</button>
    </div>
  )
}

export default App