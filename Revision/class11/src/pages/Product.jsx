import React from 'react'
import { Link } from 'react-router-dom'
const Product = () => {
  return (
    <div>
            <h1 className='text-5xl underline font-bold mb-5'> Prodct Pages </h1>

            <div className='flex gap-2'>
             <Link className='text-xl font-semibold underline' to="/product/men">Men Page</Link>
            <Link className='text-xl font-semibold underline' to="/product/women">Women Page</Link>
            </div>
    </div>
  )
}

export default Product