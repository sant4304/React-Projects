import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetal = () => {
    const param = useParams()
  return (
    <div>
         <h1 className='capitalize text-5xl whitespace-nowrap underline font-bold fixed '> 
           {param.id}  Course Detail Pages
          </h1>
    </div>
  )
}

export default CourseDetal