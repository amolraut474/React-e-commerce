import React from 'react'
import './Footer.css';

export default function Footer() {
  return (
    <>

   <div class="footer">
      <div class="container">
         <div class="row">
            <div class="col-lg-3">
               <div class="f-logo">
                  <img src="./img/logo-2.png" alt=""/>
                  <p class="number">+911234567890</p>
                  <p>Lorem ipsum dolor sitamet consectur adipiscing Duis esollici tudin augue euismod.</p>
               </div>
            </div>
            <div class="col-lg-3">
               <h3 class="f-heading">Useful Links</h3>
               <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                     About
                  </li>
                  <li class="list-group-item">
                     News
                  </li>
                  <li class="list-group-item">
                     Partners
                  </li>
               </ul>
            </div>
            <div class="col-lg-3 footer-3">
               <ul class="list-group list-group-flush ">
                  <li class="list-group-item">Delivery and payment</li>
                  <li class="list-group-item">Terms of sale</li>
                  <li class="list-group-item">Contacts</li>
               </ul>
            </div>
            <div class="col-lg-3">
               <h3 class="f-heading">Follow Us</h3>
               <div class="icon-box-f">
                  <span><i class="bi bi-instagram ic-1"></i>
                     <i class="bi bi-twitter ic-3">
                     </i>
                     <i class="bi bi-telegram ic-4"></i>
                  </span>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div class="footer-last">
      <div class="container">
         <div class="row">
            <div class="col-lg-12">
               <div>
                  <p class="copy text-center">COPYRIGHT © 2023 - ALL RIGHTS RESERVED BY <span class="e-f">AMOL</span>
                  </p>
               </div>
            </div>
         </div>
      </div>
   </div>
      
    </>
  )
}
