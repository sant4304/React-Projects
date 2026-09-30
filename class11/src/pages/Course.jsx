import React from 'react'
import { useParams } from 'react-router-dom'

const Course = () => {

  const params = useParams()
  return (
    <div>
       <h1 className='text-3xl underline font-bold fixed left-[50vw] -translate-x-1/2 '>  Course</h1>
    </div>
  )
}

export default Course
