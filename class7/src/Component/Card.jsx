import React from 'react'

const Card = (props) => {
    return (
        <div className='lg:w-[23vw] md:w-[30vw] sm:w-[45vw] rounded-xl py-8 px-8 flex items-center flex-col text-center bg-white text-black'>
            <img className='h-24 w-24 rounded-full object-center object-cover' src={props.elem.imageURL} alt="" />
            <h1 className='text-2xl mt-2 font-bold'>{props.elem.userName}</h1>
            <h5 className=' text-blue-500 text-lg font-semibold my-2'>{props.elem.userRole}</h5>
            <p className='text-sm font-medium leading-tight'>{props.elem.userDesc}</p>
            <button onClick={() => {
                props.deleteHandler(props.idx)
            }} className='px-4 py-2 rounded text-xs cursor-pointer active:scale-95 bg-red-600 text-white font-semibold mt-3'>Remove</button>
        </div>
    )
}

export default Card

//  <div className='w-[23vw]  bg-white text-black py-8 px-8 ml-5 rounded-xl text-center flex flex-col items-center'>
//               <img className='h-24 w-24 rounded-full object-cover object-center' src="https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
//               <h1 className='text-xl mt-2 font-semibold'>Riyaa</h1>
//               <h5 className='text-base text-lg text-blue-500 font-semibold my-3 '>Model</h5>
//               <p className='text-xs font-medium leading-tight'>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur .</p>
//               <button className='px-4 py-2 bg-red-500 text-white font-semibold rounded-xl mt-3 text-xs cursor-pointer active:scale-95'>Remove</button>
//            </div>
