import React from 'react'
import { Link } from 'react-router-dom'
import Men from './Men'

const Product = () => {
  return (
    <div>
      {/* <h1 className='text-3xl underline font-bold absolute top-0 left-1/2 -translate-x-1/2'>Product Page</h1> */}

      <h1 className='text-3xl underline font-bold fixed left-[50vw] -translate-x-1/2 '>Product Page</h1>
       <Link className='mt-5' to='/product/men' >Mens Page</Link>

    </div>
  )
}

export default Product
