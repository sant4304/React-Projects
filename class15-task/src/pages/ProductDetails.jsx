import React, { useContext } from 'react'
import { ProductDataContext } from '../context/ProductContext'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  const productData= useContext(ProductDataContext)
  console.log(productData)

   const param = useParams()
   console.log(param.id)

   let selectedProduct = ' '
   if(productData.length >0){
     selectedProduct = productData.find((elem) => {
    return(elem.id == param.id)
   })
   }
   

   
   console.log(selectedProduct)
   
  // const param = useParams()
  // console.log(param)

  // const selectedProduct = productData.find((elem)=> elem.id ==id)
  // console.log(selectedProduct)


  return (
    <div>
        <h2>{selectedProduct.title}</h2>
    </div>
  )
}

export default ProductDetails
