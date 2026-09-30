import React from 'react'
import { useParams } from 'react-router-dom'

const Chort = () => {

    let param = useParams()
  return (
    <div>
       <h1 className='text-3xl underline font-bold fixed left-[50vw] -translate-x-1/2 '>{param.id} Cohort Page</h1>
    </div>
  )
}

export default Chort
