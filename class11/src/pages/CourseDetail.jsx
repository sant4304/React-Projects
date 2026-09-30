import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetail = () => {
    let param = useParams()
  return (
    <div>
     <h1 className='text-3xl underline font-bold fixed left-[50vw] -translate-x-1/2 '>{param.id} Course Detail Page</h1>
    </div>
  )
}

export default CourseDetail
