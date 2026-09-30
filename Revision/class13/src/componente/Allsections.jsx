import React from 'react'
import Section1 from './section1'
import Section2 from './section2'
const Allsections = (props) => {
  console.log("All ",props)
  return (
    <div>Allsections
      <Section1/>
      <Section2 courseData={props.courseData}/>
    </div>
  )
}

export default Allsections