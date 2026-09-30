import axios from "axios";



export const getAllProductData = async () => {
    const respose = await axios.get("https://fakestoreapi.com/products");
    // console.log(respose.data);
    return respose.data
  };

