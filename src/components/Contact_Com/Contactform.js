import React from 'react'
import { Link } from 'react-router-dom'
import './Contact.css';
export default function Contactform() {
  return (
  <>
  <section class="contact-us" id="contact-us">
   <div class="container">
      {/* <div class="section-4-content text-center">
         <h3 class="section-4-heading"> Contact<span className='Cart-c'> us</span> </h3>
         <p class="para tab-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br/>Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.
         </p>
      </div> */}
      <div class="row d-flex justify-content-center">
         <div class="col-lg-6 col-md-12 main-form">
            <form action="" class="text-center form-gate">
               <h3>Get In <span className='Cart-c'>Touch</span> </h3>
               <div class="mb-3 e-name">
                  <input type="email" class="form-control" id="exampleInputEmail1"
                     aria-describedby="emailHelp" placeholder="Enter Name *"/>
                  <input type="email" class="form-control" id="exampleInputEmail1"
                     aria-describedby="emailHelp" placeholder="Enter Email *"/>
               </div>
               <div class="mb-3">
                  <input type="email" class="form-control" id="exampleInputEmail1"
                     aria-describedby="emailHelp" placeholder="Enter Subject *"/>
               </div>
               <div class="mb-3">
                  <div class="dropdown">
                     <button class="dropdown-toggle dropdown-color" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                     How can we help you?
                     </button>
                     <ul class="dropdown-menu">
                        <li><Link class="dropdown-item" href="#service" id="service">Choose a Service</Link></li>
                        <li><Link class="dropdown-item" href="#Design" id="Design">Issues with products</Link>
                        </li>
                        <li><Link class="dropdown-item" href="#Development" id="Development">Issues with
                           discount coupons</Link>
                        </li>
                        <li><Link class="dropdown-item" href="#Marketing" id="Marketing">Issues with
                           payment</Link>
                        </li>
                     </ul>
                  </div>
               </div>
               <div class="mb-3">
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="6"
                     placeholder="Message *"></textarea>
               </div>
               <button type="button" class="btn btn-success btn-lg btn-custom-submit">Send Message</button>
               </form>
         </div>
         <div class="col-lg-4 col-md-12 form-second-part">
            <div class="card-info-item">
               <ul class="contact-form-map">
                  <li>
                     <h3>25 North Street,Dubai</h3>
                  </li>
                  <li>
                     <h3 class="icon-map"><i class="bi bi-geo-alt"></i></h3>
                     <h5>Office Address</h5>
                  </li>
               </ul>
            </div>
            <div class="card-info-item">
               <ul class="contact-form-map">
                  <li>
                     <h3>Example@gmail.com</h3>
                  </li>
                  <li>
                     <h3 class="icon-map"><i class="bi bi-envelope"></i></h3>
                     <h5>Official Mail</h5>
                  </li>
               </ul>
            </div>
            <div class="card-info-item">
               <ul class="contact-form-map">
                  <li>
                     <h3>+91 123-456-7890</h3>
                  </li>
                  <li>
                     <h3 class="icon-map"><i class="bi bi-telephone-forward"></i></h3>
                     <h5>
                        Official Phone
                     </h5>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   </div>
</section>
  
  
  </>
  )
}
