
import "./index.css";

// import React, { useState } from 'react'

// const App = () => {

//   // let a =0;
//   const [a , setA] = useState(1)
      //  const btnclicked  = () => {
      //     setA(a + 1);
      //    };
//   const [b,setB] =useState(10)

//   const [num , setNum] = useState(0)
//   const btnclicked =()=>{

//    setA(prev =>{
//     if(prev >=10){
//       return prev
//     }
//     return prev+1
//    })
//   }

//   // const [king, setKing] = useState("Rahul");
//   // const  [queen, setQueen] = useState("Aalsii")
//   // const btnclicked=()=>{
//   //   if(s)
//   //   setKing("Rohit")
//   //   setQueen("Arshii")
//   // }

//   return (
//     <div>
//       <h1>{a}</h1>
//       <button onClick={()=>{btnclicked()}}> Increase</button>

//       <h2>{b}</h2>
//       <button onClick={()=>{setB(b+1)}}>Increase</button>
//       <button onClick={()=>{setB(prev=>{
//         if(prev<=0){
//           return prev
//         }
//         return prev-1
//       }
//         )}}>decrease</button>

//         <div>
//            <h1>{num}</h1>
//         </div>

//         <button onClick={()=>{
//           const num = Math.floor(Math.random()*100)
//           setNum(num)
//           console.log(num)
//         }}>Click</button>

//     </div>
//   )
// }

// export default App

/************************************************************/

// import React, { useState } from 'react'

// const App = () => {

//   let names =["Rahul","Rhoit ","Vaani","Ajay","Aalu","Priyanka"]
//   const [index ,setIndex] = useState(0)
//   return (
//     <div>
//        <h1>{names[index]}</h1>
//        <button onClick={()=>{
//         // setIndex(
//         //   (prev)=>{
//         //    return (prev+1)%names.length
//         //   }
//         // )
//         // console.log(names[index])
//         if(index==names.length-1){
//           setIndex(0)
//         }
//         else{
//           setIndex(index+1)
//         }
//        }}>Click</button>
//     </div>
//   )
// }

// export default App

// import React from 'react'

// const App = () => {

//   let marks = [10,20,30,40,5]

//   const graceStudent=()=>{
//     // const mar = marks.indexOf(40)
//     // console.log(mar)

//     marks[4] = marks[4]+5
//     console.log(marks)
//   }
//   return (
//     <div>
//       {marks.map((ele,idx)=>{
//         return <h1 key={idx}>Marks of student is {idx+1} is  {ele}</h1>
//       })}
//       <button onClick={graceStudent}>Click me</button>
//     </div>

//   )
// }

// export default App

/****************************************/

// import React, { useState } from 'react';

// const App = () => {
//   const [marks, setMarks] = useState([10, 20, 30, 40, 5]);

//   const changeMarks=()=>{
//     // let marks =[...marks]
//     //    marks[4] = marks[4] + 5
//     //    setMarks(mark)
//     setMarks((prev)=>{
//       let marks =[...prev]
//       marks[4] = marks[4]+5
//       return marks
//     })
//   }

//   return (
//     <div>
//       {marks.map((ele)=>{
//         return <h1>Marks of student  {ele}</h1>
//       })}

//      <button onClick={changeMarks}>Click</button>
//     </div>
//   );
// };

// export default App;

/***************************************************/
// import React from "react";

// const App = () => {
//   let marks = [10, 20, 50, 60, 90];

//   //   const graceStudent = () => {
//   //      console.log("Original:", marks);
//   //   let updatedMarks = marks.map((e) => {
//   //     return e + 5;
//   //   });

//   //   console.log("Updated:", updatedMarks);

//   // };
//   const graceStudent = () => {
    

//     let mark = marks.map((e) => e + 5);

//     console.log("Updated:", mark);
//   };
//   // const graceStudent = () => {
//   //   marks = marks.map((e) => {return e + 5});
//   //   console.log(marks);
//   // };

//   return (
//     <div>
//       {marks.map((a) => (
//         <>
//           <h1>{a}</h1>
//         </>
//       ))}

//       <button onClick={graceStudent}>Click Me</button>
//     </div>
//   );
// };

// export default App;

/***************************************************************/

// import React, { useState } from "react";

// const App = () => {
//   // let marks = [10, 20, 50, 60, 90];
//   const [marks, setMarks] = useState([10, 20, 50, 60, 90])
//   const [count , setCount] =useState(0)

//   const graceStudent=()=>{
//     let newmarks = marks.map((e)=>{
//       if(e>=95){
//         return e
//       }
//       else{
//        return e+5
//       }
//     })
//     console.log(newmarks)
//     setMarks(newmarks)
    
//   }
//   //  const graceStudent=()=>{
//   //     setMarks(marks.map((e)=>e+5))
//   //  }

//     //  const graceStudent=()=>{
//     //      setMarks((p)=>{
//     //       const newMarks = p.map((e)=>e+5)
//     //       return newMarks
//     //      })
//     //  }

//     //  const graceStudent=()=>{
//     //   if(count<1){
//     //    setMarks((prev) => prev.map((e) => e + 5));
//     //    setCount(count+1)
//     //   }
//     //  }

//   return (
//     <div>
//       {marks.map((a) => (
//         <>
//           <h1>{a}</h1>
//         </>
//       ))}

//       <button onClick={graceStudent}>Click Me</button>
//     </div>
//   );
// };

// export default App;


/*******************************************************************/ 


// import React, { useState } from 'react'
// import Men from "./Component/Men";
// import Women from "./Component/Women";
// const App = () => {
//   const [gender, setGender] = useState("Male")
  

//   // function changeGender(){
//   //   setGender(gender=="Male"? "Female": "Male")
//   // }


//   // function changeGender(){
//   //   setGender((prev)=>{
//   //     return prev =="Male" ? "Female" : "Male"
//   //   })
//   // }

//   function changeGender(){
//     if(gender=="Male"){
//       setGender("Female")
//     }
//     else{
//       setGender("Male")
//     }
//   }

//   let component;
//   if(gender=='Male'){
//     component = <Men/>
//   }
//   else{
//     component = <Women/>
//   }
//   return (

//     <div className="parent">
//       {gender}
//       <button onClick={changeGender}>Click</button>
//       {gender=="Male"? <Men/>:<Women/>}
//       <p>Is</p>
//       {component}
      
     
      
//     </div>
//   )
// }

// export default App



// import React, { useState } from 'react'
// import Washroom from "./Component/Washroom";

// const App = () => {
//   const [gender, setGender] = useState("Male")
  

//   // function changeGender(){
//   //   setGender(gender=="Male"? "Female": "Male")
//   // }


//   // function changeGender(){
//   //   setGender((prev)=>{
//   //     return prev =="Male" ? "Female" : "Male"
//   //   })
//   // }

//   function changeGender(){
//     if(gender=="Male"){
//       setGender("Female")
//     }
//     else{
//       setGender("Male")
//     }
//   }


//   return (

//     <div className="parent">
//       {gender}
//       <button onClick={changeGender}>Click</button>
//       <Washroom user ={gender=="Male"?"Male":"Female"}/> 
//     </div>
//   )
// }
//  export default App


import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [games, setGames] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const gamesPerPage = 12;

  useEffect(() => {
    getGames();
  }, []);

  const getGames = async () => {
    try {
      const response = await axios.get(
        "https://www.freetogame.com/api/games"
      );

      setGames(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Pagination Logic
  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;

  const currentGames = games.slice(
    indexOfFirstGame,
    indexOfLastGame
  );

  const totalPages = Math.ceil(games.length / gamesPerPage);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Free To Game</h1>

      {/* Games */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px",
        }}
      >
        {currentGames.map((game) => (
          <div
            key={game.id}
            style={{
              border: "1px solid gray",
              padding: "10px",
            }}
          >
            <img
              src={game.thumbnail}
              alt={game.title}
              width="100%"
            />

            <h3>{game.title}</h3>

            <p>{game.genre}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginTop: "30px",
        }}
      >
        {/* Previous */}

        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </button>

        {/* Page Numbers */}

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            style={{
              backgroundColor:
                currentPage === index + 1 ? "blue" : "white",
              color:
                currentPage === index + 1 ? "white" : "black",
            }}
          >
            {index + 1}
          </button>
        ))}

        {/* Next */}

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;