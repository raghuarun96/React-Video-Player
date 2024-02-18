import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    useParams();
    const [productData , setProductData] = useState(null);
    useEffect(() => {
        fetch('https://dummyjson.com/products/${id}')
        .then(res => res.json())
        .then(json => setProductData(json))
      }, []);
      console.log(productData);
  return (
    <div>productDetails</div>
  )
}

export default ProductDetails