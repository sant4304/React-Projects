import React from 'react'

const Card = (props) => {
  // console.log(props.user,props.age)
  

  return (
    <div className='bg-white border-5 border-red-500 m-2 px-5 py-3  rounded-2xl  h-40 w-100 flex justify-center items-center'>
      <h1 className='text-3xl font-semibold'>Card {props.user}</h1>
    </div>
  )
}

export default Card
