import React from 'react'

const Button = (props) => {
  return (
    <div className='w-fit  px-5 py-2 m-2 bg-emerald-500 rounded active:scale-95 active:bg-emerald-700 transition  cursor-pointer hover:bg-red-600'>
      {props.text}
    </div>
  )
}

export default Button
