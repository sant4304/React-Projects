import React from 'react'
import { useParams } from 'react-router-dom'

const Anycourse = () => {
    let params = useParams()
    console.log(params.id)
  return (
    <div>
       <h1 className='capitalize whitespace-nowrap text-3xl underline font-bold fixed left-[50vw] -translate-x-1/2 '>{params.id}  Any Course</h1>
    </div>
  )
}

export default Anycourse
