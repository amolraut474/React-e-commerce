import "./App.css";
import { useState } from 'react';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// React Pages
import Home from "./pages/Home";
import Pages from "./pages/Pages";
import Products from "./pages/Products";
import BlogPage from "./pages/Blog";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import BlogPost from "./components/Blog_Com/Blog";
import Nomatch from "./pages/Nomatch/Nomatch";
// react Components
import Header from "./components/Header_Com/Header";
import Footer from "./components/Footer_Com/Footer";
import ProductDetails from "./components/Product_Com/ProductDynamic";
import ProductList from "./components/Product_Com/ProductList";
import Cart from "./components/Product_Com/Cart";


function App() {
  const [cartItems, setCartItems] = useState([]); // State for managing cart items

  // Function to add items to the cart
  const addToCart = (productId, quantity) => {
    const existingProductIndex = cartItems.findIndex(item => item.id === productId);

    if (existingProductIndex !== -1) {
      // If the product is already in the cart, update the quantity
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingProductIndex].quantity += quantity;
      setCartItems(updatedCartItems);
    } else {
      // If the product is not in the cart, add it
      const product = { id: productId, name: `Product ${productId}`, product_price: 20.99, quantity };
      setCartItems(prevCartItems => [...prevCartItems, product]);
    }

  };
  // Function to remove items from the cart
  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCartItems);
  };

  // Function to update quantity of items in the cart
  const updateQuantity = (productId, newQuantity) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === productId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  return (
    <div className="App">

      <Router>
        <Header />

        <Routes>


          <Route path='/' element={<Home />} />
          <Route path='/Pages' element={<Pages />} />
          <Route path='/Products' element={<Products />} />
          <Route path='/Shop' element={<Shop />} />
          <Route path='/Blog' element={<BlogPage />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='*' element={<Nomatch />} />

          <Route
            path="/"
            element={<ProductList />}
          />
          <Route
            path="/product/:productId"
            element={<ProductDetails addToCart={addToCart} />}
          />
          <Route
            path="/Cart"
            element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />}
          />
          <Route path="/" element={<BlogPage />} />
          <Route path="/Blog/:id" element={<BlogPost />} />
        </Routes>

        <Footer />
      </Router>

    </div>

  );

}

export default App;

