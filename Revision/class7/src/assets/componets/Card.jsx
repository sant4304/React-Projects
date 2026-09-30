import React from 'react'

const Card = () => {
  return (
    <div className='w-[23vw] rounded-xl p-5 px-8 bg-white flex flex-col items-center text-black '>
             <img className='object-cover h-20 w-20 rounded-full' src="https://images.unsplash.com/photo-1777041916709-d7fff7ddb91d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

         <h1 className='text-2xl mt-2 font-semibold'>sam</h1>
         <h5 className='text-base text-blue-600 text-lg font-semibold my-5'>Devloper</h5>
         <p className='text-xs leading-tight font-medium text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit iste repudiandae asperior</p>    
         <button className='px-4 py-2 rounded-md text-xs mt-1 bg-red-600 cursor-pointer active:scale-95'>Remove</button>
      </div>
  )
}

export default Card