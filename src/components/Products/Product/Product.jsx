import React, { useEffect } from "react";
import axios from "axios";
const Product = () => {
  // Note: this id should come from api
   
   useEffect(()=>{
          
      const products = async() =>{
        
         let r = await axios.get("http://localhost:8080/products")

         console.log(r.data)

      }

      products();

   },[]) 


  const product = { id: 1 };
  return (
    <div data-cy={`product-${product.id}`}>
      <h3 data-cy="product-name"></h3>
      <h6 data-cy="product-description"></h6>
      <button data-cy="product-add-item-to-cart-button"></button>
      <div>
        <button data-cy="product-increment-cart-item-count-button">Add to card</button>
        <span data-cy="product-count">
          {
            // Count here from CartItems
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button">remove to card</button>
        <button data-cy="product-remove-cart-item-button"></button>
      </div>
    </div>
  );
};


export default Product;
