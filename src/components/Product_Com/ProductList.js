// ProductList.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css'
import products from './ProductDeta';

const ProductList = ({ addToCart }) => {
  return (
    <div class="product-list-section">
      {/* <h2>Products List</h2> */}
      <div class='container'>
        <div class="row">
        <ul>
        {products.map((product) => (
          <li key={product.id}>
            
             <img src={product.imageUrl} alt={product.name}/>{product.name}<h2 class='price'>{product.product_price}</h2>
            {/* <button onClick={() => addToCart(product.id, 1)}>Add to Cart</button> */}
            <Link to={`/product/${product.id}`}>View Details</Link>
           
            
          </li>
          
        ))}
         {/* <Link to="/cart">View Cart</Link> */}
      </ul>
        </div>
      </div>
      
    </div>
  );
};

export default ProductList;