// Product.js
import React from 'react';

const Product = ({ name, description, price, imageUrl }) => (
  <div className="product">
    <img src={imageUrl} alt={name} />
    <h3>{name}</h3>
    <p>{description}</p>
    <p>${price}</p>
  
  </div>
);
export default Product;