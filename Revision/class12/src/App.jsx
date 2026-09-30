import React from 'react'
import Navar from './components/Navar'
import { Routes ,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import Koder from './pages/Koder'
import Kodex from './pages/Kodex'
import AllCourses from './pages/AllCourses'
import Footer from './components/Footer'
const App = () => {
  return (
    <div>
      <Navar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/courses' element={<Courses/>}>
        <Route path='/courses' element={<AllCourses/>}/>
         <Route path='/courses/koder' element={<Koder/>}/>
         <Route path='/courses/kodex' element ={<Kodex/>}/>
        </Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App