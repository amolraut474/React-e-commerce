import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img from "../images/E-com-1.png";
import './Header.css'; // Import your CSS file for styling
const Header = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false);
const toggleMenu = () => {
setIsMenuOpen(!isMenuOpen);
};
return (
<>
<header className='header-fixed'>
   <section className="Announcement-bar">
      <div className="container">
         <div className="row">
            <div className="col-lg-6 col-sm-12 col-md-12 d-flex align-items-center gap-2 Ann-col-mobile">
               <h2 className="Ann-icon"><span><i className="bi bi-translate"></i></span>English   <i className="bi bi-chevron-down"></i> </h2>
               <h2 className="Ann-icon">USD <span><i className="bi bi-chevron-down"></i></span>   </h2>
               <h2 className="Ann-icon"><span><i className="bi bi-phone"></i></span>123-456-7890</h2>
            </div>
            <div className="col-lg-6 col-sm-12 col-md-12 d-flex align-items-center justify-content-end gap-2 Ann-col-mobile">
               <h2 className="Ann-icon"><span><i className="bi bi-shuffle"></i></span>Compare</h2>
               <h2 className="Ann-icon"><span><i className="bi bi-heart"></i></span>Wishlist</h2>
               <h2 className="Ann-icon"><span><i className="bi bi-person-add"></i></span>Login</h2>
            </div>
         </div>
      </div>
   </section>
   <section className='Header-section-part'>
      <div className='container'>
         <div className='custom-header'>
            <div className="logo">
            <div className='site-logo'><img src={img} class="img-fluid site-logo" alt="logo" /></div>
               {/* Your logo or site title */}
            </div>
            <nav className={isMenuOpen ? "open" : ""}>
            <ul>
               <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/">
                  Home</Link>
               </li>
               <li class="nav-item">
                  <Link class="nav-link " aria-current="page" to="/Pages">
                  Pages</Link>
               </li>
               <li class="nav-item">
                  <Link class="nav-link " aria-current="page" to="/Blog">
                  Blog</Link>
               </li>
               <li class="nav-item">
                  <Link class="nav-link " aria-current="page" to="/Products">
                  Products</Link>
               </li>
               <li class="nav-item">
                  <Link class="nav-link " aria-current="page" to="/Shop">
                  Shop</Link>
               </li>
               <li class="nav-item">
                  <Link class="nav-link " aria-current="page" to="/Contact">
                  Contact us</Link>
               </li>
            </ul>
            </nav>
            <div className="icon-box mobile-icon">
               <h2><i className="bi bi-search"></i></h2>
               <Link to="/cart" className="cart-link">
               <h2><i className="bi bi-cart3"></i></h2>
               </Link>
            </div>
            <div className="toggle-icon" onClick={toggleMenu}>
               <i className={isMenuOpen ? "bi bi-x" : "bi bi-list"}></i>
            </div>
            <div className="icon-box desktop-icon">
               <h2><i className="bi bi-search"></i></h2>
               <Link to="/cart" className="cart-link">
               <h2><i className="bi bi-cart3"></i></h2>
               </Link>
            </div>
         </div>
      </div>
   </section>
</header>
</>
);
}
export default Header;