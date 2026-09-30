import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
import {getAllProductData } from '../api/ProducrApi';



export const ProductDataContext =createContext()
const ProductContext = (props) => {

 const [productData, setProductData] = useState([]);

  // const getData = async () => {
  //   const respose = await axios.get("https://fakestoreapi.com/products");
  //   // console.log(respose.data);
  //   setProductData(respose.data);
  // };

  const setData = async()=>{
     const data = await getAllProductData()
     console.log(data)
     setProductData(data)
  }


//   const getFirstData = async () => {
//     const response = await axios.get("https://fakestoreapi.com/products/1");
//     console.log(response.data);
//   };

  useEffect(function () {
    setData();
  }, []);
  return (
    <ProductDataContext.Provider value={productData}>
        {props.children}
    </ProductDataContext.Provider>
  )
}

export default ProductContext
