import React from 'react'
import Courses from './Courses'

const Allcourses = (props) => {
  return (
    <div>Allcourses
      <Courses courseData={props.courseData}/>
      <Courses/>
      <Courses/>
      <Courses/>
      <h1>{props.courseData.mentor}</h1>
    </div>
  )
}

export default Allcourses


