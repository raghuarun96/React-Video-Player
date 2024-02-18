import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Products = ({products}) => {
    // const [data , setData] = useState([]);
  return (
    <>
    <div>products</div>
   {products.map((item)=> 
    {
        console.log(item.id , "id");
     return (
        <div className="product-container" key={item.id}>
            <Link to={'/products/${item.id}'}>
        <img src={item.thumbnail} alt={item.title}/>
     <h5>{item.brand}</h5>
     <p>{item.category}</p>
     <p>{item.price}</p>
     <p>{item.description}</p>
     <p>{item.ratings}</p>
     </Link>
     </div>
     )   
     
    })}
    
    </>
  )
}

export default Products