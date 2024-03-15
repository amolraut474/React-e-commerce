// ProductList.js
import React from 'react';
import ProductSlider from './ProductSlider';
import './ProductSlider.css'
const ProductList = ({ products }) => (
  <div class="container Products-slider-container">
    <div class="row">
      <div className="product-list">
        <ProductSlider products={products} />
        
      </div>
    </div>
  </div>



);

export default ProductList;