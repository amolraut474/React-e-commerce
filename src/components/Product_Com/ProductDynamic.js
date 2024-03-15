import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import products from './ProductDeta';
import Newsletter from '../Newsletter-form/Newsletter';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
const ProductDetails = ({ addToCart }) => {
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);

  // Assuming products is your data source
  const product = products.find(product => product.id === parseInt(productId, 10));

  if (!product) {
    // Handle product not found
    return <div>Product not found</div>;
  }

  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const handleAddToCart = () => {
    addToCart(productId, quantity);
  };

  return (
    <>
    <div className='Bread-crumb-section'>
        <div className="container">
          <div className='Bread-crumb'>
            <div className='Bread-crumb-head'>
            <h3 class="section-4-heading"> Blog <span class="Cart-c"> List</span> </h3>
            </div>
            <div className='Bread-crumb-tab'>
              <Breadcrumbs />
            </div>
          </div>
        </div>
      </div>
    <div class="Single-product-page">
      <div class="container">
        <div class="row     justify-content-center">
          <div class="col-lg-5">
            <div> <img src={product.imageUrl} alt={product.name} /></div>

          </div>
          <div class="col-lg-5 text-start p-part-contant">
            <h2 class="p-name">{product.name}</h2>
            <h2 class='price'>{product.product_price}</h2>
            <p class="p-disc ">{product.description}</p>

            <div class="Category">
              <p><span>SKU:</span>{product.SKU}</p>
              <p><span>Category:</span>{product.Category}</p>
              <p><span>Tags:</span>{product.Tags}</p>
            </div>

            <div class="Quantity-btn">
             <span>Quantity:</span> 
              <button onClick={decreaseQuantity}>-</button>
              <span>{quantity}</span>
              <button onClick={increaseQuantity}>+</button>
            </div>
            <div class="Add-to-cart"><button onClick={handleAddToCart}>Add to Cart</button></div>
           



            <Link to="/cart" class="cart-link">View Cart</Link>


          </div>

        </div>
      </div>

     
    </div >
    <Newsletter/>
    </>
  
  );
};

export default ProductDetails;