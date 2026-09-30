import React, { useContext } from "react";
import { ProductDataContext } from "../context/ProductContext";
import { Link } from "react-router-dom";

const Products = () => {
  const productData = useContext(ProductDataContext);
  
  let renderData = ''

  if(productData.length > 0){
    renderData =productData.map((elem, idx) => {
        return (
          <>
            {/* <h1>hello</h1> */}
            <Link target="blank" className="product" href="" key={idx} to ={`/product/${elem.id}`}>
              <img src={elem.image} />
              <h2>{elem.title}</h2>
            </Link>
          </>
        );
      })
  }
  return (
    <div className="allProducts">
  
      {renderData}
    </div>
  );
};

export default Products;
