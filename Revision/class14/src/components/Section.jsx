import React, { useContext } from 'react'
import { PostContex } from '../context/PostDataContex'

const Section = (props) => {
  
    let data = useContext(PostContex)

    console.log(data)

    console.log(props)
  return (
    <div className='h-[90vh] bg-zinc-600'>
        <h1 className='text-xl'>All Section</h1>
        <p>{props.children[0]}</p>
        {data.map((ele)=>{
            return(
                <>
                <h1>{ele.id}</h1>
                </>
            )
        })}

    </div>
  )
}

export default Section