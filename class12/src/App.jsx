import React from "react";
import Navar from "./component/Navar";
import { Routes, Route, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Koder from "./pages/Koder";
import Kodex from "./pages/Kodex";
import Allcourses from "./pages/Allcourses";
import Footer from "./component/Footer";

const App = () => {
  //  const router = createBrowserRouter(
  //  [ {
  //     path:'/',
  //     element:<Home/>
  //   },
  //   {
  //     path:'/about',
  //     element:<About/>
  //   },
  //   {
  //     path:'/courses',
  //     element:<Courses/>
  //   }]
  //  )

  return (
    <div>


      <Navar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/courses" element={<Courses />}>
          <Route path="/courses/koder" element={<Koder />} />
          <Route path="/courses/kodex" element={<Kodex />} />
          <Route path="/courses" element ={<Allcourses/>}/>
        </Route>
        <Route path="/courses/kodex" element={<Kodex />} />
      </Routes>
       
       {/* <RouterProvider router={router}/> */}
      <Footer/>
    </div>
  );
};

export default App;
