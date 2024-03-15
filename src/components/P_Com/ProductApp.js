// ProductApp.js
import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import ProductDeta from '../Product_Com/ProductDeta';

const ProductApp = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    

    setProducts(ProductDeta);
  }, []);

  return (
    <div class="Products-slider-container-main">
      <h1>Trending Items</h1>
      <ProductList products={products} />
      
    </div>
  );
};

export default ProductApp;