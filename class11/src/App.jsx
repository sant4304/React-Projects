import React from 'react'
import About from './pages/About'
import Home from './pages/Home'
import { Route ,Routes} from 'react-router-dom'
import Product from './pages/Product'
import Navar from './component/Navar'
import Men from './pages/Men'
import RandomAbout from './pages/RandomAbout'
import Course from './pages/Course'
import Chort from './pages/Chort'
import Anycourse from './pages/Anycourse'
import CourseDetail from './pages/CourseDetail'
import NotFound from './pages/NotFound'
const App = () => {
  return (
    <div>
      
      <Navar/>
    
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/product' element={<Product/>}/>
       <Route path='/product/men' element={<Men/>}/>
      <Route path='/course' element={<Course/>}/>

      {/* nested routes */}
     

      {/*nested dynamic routes */}
      <Route path='/about/:id' element ={<RandomAbout/>}/>
      <Route path='/course/:id' element={<Anycourse/>}/>
      <Route path='/course/:id/de' element={<CourseDetail/>}/>
      <Route path='/course/:id/:kk' element={<Chort/>}/>
       
       {/* Not found page */}
       <Route path='/*' element={<NotFound/>}/>

     </Routes>
    </div>
  )
}

export default App
