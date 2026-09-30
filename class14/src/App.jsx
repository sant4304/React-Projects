// import React from 'react'
// import Navar from './component/Navar'
// import Footer from './component/Footer'
// import Section from './component/Section'

// const App = () => {
//   return (
//     <div className="h-screen flex flex-col">
//       {/* <h1>Hello</h1> */}
//       <Navar/>
//       <Section/>
//       <Footer/>
//     </div>

//   )
// }

// export default App

import React from "react";
import Navar from "./component/Navar";
import Footer from "./component/Footer";
import Section from "./component/Section";

const App = () => {
  return (
    <div  className="app-div h-screen flex flex-col">
      {/* <h1>Hello</h1> */}
      <Navar/>
      <Section/>
      <Footer />
    </div>
  );
};

export default App;
