import React, { useState } from 'react';
import Newsletter from '../Newsletter-form/Newsletter';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';

const Cart = ({ cartItems, removeFromCart, updateQuantity }) => {
  const [checkoutInfo, setCheckoutInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    country: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCheckoutInfo(prevInfo => ({ ...prevInfo, [name]: value }));
  };

  const handleCheckout = () => {
    // Implement checkout process here, e.g., send order to server, process payment, etc.
    // You can use checkoutInfo object to gather shipping information
    // Once the checkout process is complete, you can clear the cartItems state or perform other actions
    alert('Checkout process completed!');
    // Clear the cartItems state
    // setCartItems([]);
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.product_price * item.quantity), 0);
  };

  return (
    <>
      <div className='Bread-crumb-section'>
        <div className="container">
          <div className='Bread-crumb'>
            <div className='Bread-crumb-head'>
              <h3 class="section-4-heading">Shopping <span class="Cart-c"> Cart</span> </h3>
            </div>
            <div className='Bread-crumb-tab'>
              <Breadcrumbs />
            </div>
          </div>
        </div>
      </div>

      <div class="Shopping-cart">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div className='mobile-cart'>
                <div class="cart-content">
                  <h3>PRODUCT</h3>
                  <h3>PRICE</h3>
                  <h3>QUANTITY</h3>
                  <h3>SUBTOTAL</h3>
                  <h3>REMOVE</h3>
                </div>
                <ul class="P-cart">
                  {cartItems.map(item => (
                    <li key={item.id}>
                      <div className='cart-main-container '>
                        <div>
                          <h2>{item.name}</h2>
                        </div>
                        <div><h2>Price: ${item.product_price}</h2></div>
                        <div className='Quantity-btn-cart'>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                          {item.quantity}
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                        </div>
                        <div><h2>Subtotal: ${(item.product_price * item.quantity).toFixed(2)}</h2></div>
                        <div> <button onClick={() => removeFromCart(item.id)} className='cancel-btn'><i class="fa-solid fa-xmark"></i></button></div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='cart-form-section'>
      <div className='container'>
        <div className='cart-form'>
          <h3>Cart Totals</h3>
          <input type="text" name="firstName" value={checkoutInfo.firstName} onChange={handleInputChange} placeholder="First Name" />
          <input type="text" name="lastName" value={checkoutInfo.firstName} onChange={handleInputChange} placeholder="lastName" />
          <input type="text" name="email" value={checkoutInfo.firstName} onChange={handleInputChange} placeholder="email" />
          <input type="text" name="address" value={checkoutInfo.firstName} onChange={handleInputChange} placeholder="address" />
          <input type="text" name="city" value={checkoutInfo.firstName} onChange={handleInputChange} placeholder="city" />
          <input type="text" name="postalCode" value={checkoutInfo.firstName} onChange={handleInputChange} placeholder="postalCode" />
          <input type="text" name="country" value={checkoutInfo.firstName} onChange={handleInputChange} placeholder="country" />
          {/* Add more input fields for shipping information (e.g., lastName, email, address, city, postalCode, country) */}
        </div>
        <div className='cart-p'>Total Price: ${calculateTotalPrice().toFixed(2)}</div>
        <button onClick={handleCheckout} className='checkout-btn'>Checkout</button>
      </div>
      </div>
      <Newsletter />
    </>
  );
};

export default Cart;