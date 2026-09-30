import React, { useContext } from 'react'
// import { UserDataContext } from '../context/UserContex'

const Navar = (props) => {
  console.log(props)
  // let data =useContext(UserDataContext)
  return (
    <div className='w-full h-10  bg-red-500'>
      <h1>This is Navar</h1>
      {/* <p>{props.children}</p> */}
      {/* <p>{data}</p> */}
    </div>
  )
}

export default Navar