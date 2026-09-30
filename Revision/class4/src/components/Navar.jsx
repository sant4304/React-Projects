import React from 'react'

const Navar = (props) => {

  console.log(props.links)
  return (
    <div  style={{backgroundColor:props.color}} className='bg-pink-700 flex mb-1  text-white justify-between items-center px-8 py-3'>
        <h2>{props.title}</h2>
        <div className='flex gap-10'>
           {props.links.map((ele)=>{
            return(
              <>
              <h1>{ele}</h1>
              </>
            )
           })}
        </div>
    </div>
  )
}

export default Navar