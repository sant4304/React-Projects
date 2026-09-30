import React from "react";
import Home from "./pages/Home";
import About from "./pages/about";
import { Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Men from "./pages/Men";
import Navar from "./components/Navar";
import Women from "./pages/Women";
import RandomAbout from "./pages/RandomAbout";
import Courese from "./pages/Courese";
import AnyCourses from "./pages/AnyCourses";
import CourseDetal from "./pages/CourseDetal";
import Notfound from "./pages/Notfound";
const App = () => {
  return (
    <div>
      <Navar />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/about/:id" element={<RandomAbout />} />
        <Route path="/product" element={<Product />} />

        <Route path="/product/men" element={<Men />} />
        <Route path="/product/women" element={<Women />} />

        <Route path="/courses" element={<Courese/>}/>
        <Route path="/courses/:id" element={<AnyCourses/>}/>

        <Route path="/courses/:id/code" element={<CourseDetal/>}/>

        <Route path="*" element={<Notfound/>} />
      </Routes>
    </div>
  );
};

export default App;
