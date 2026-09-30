import React, { useEffect, useState } from "react";

import axios from "axios";
import { Routes, Route} from "react-router-dom";
// import { Routes, Route, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'

const App = () => {


  return (
       <div>
        <Routes>
           <Route path="/" element ={<Home/>}/>
           <Route path="/products"  element ={<Products/>}/>
           <Route path="/product/:id" element ={<ProductDetails/>}/>
        </Routes>
       </div>
  )
};

export default App;



  // const [productData, setProductData] = useState([]);

  // const getData = async () => {
  //   const respose = await axios.get("https://fakestoreapi.com/products");
  //   console.log(respose.data);
  //   setProductData(respose.data);
  // };

  // const getFirstData = async () => {
  //   const response = await axios.get("https://fakestoreapi.com/products/1");
  //   console.log(response.data);
  // };

  // useEffect(function () {
  //   getData();
  // }, []);

//   // <div>
//     //   App

//     //   <button onClick={getData}>Click</button>
//     //   <button onClick={getFirstData}>First Product</button>
//     // </div>

//     <div className='allProducts'>
// {/*
//         <button onClick={getData}>Click</button>
//       <button onClick={getFirstData}>First Product</button> */}
//           {productData.map((elem,idx)=>{
//             return (
//               <>
//               {/* <h1>hello</h1> */}
//               <a target='blank' className='product' href='' key ={idx}>

//                 <img src ={elem.image}/>
//                 <h2>{elem.title}</h2>
//               </a>
//               </>
//             )
//           })}
//     </div>
