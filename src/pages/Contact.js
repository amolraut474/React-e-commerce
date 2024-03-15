import React from 'react'
import Newsletter from '../components/Newsletter-form/Newsletter';
import Contactform from '../components/Contact_Com/Contactform';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
export default function Contact() {
  return (
    <div>
      <div className='Bread-crumb-section'>
        <div className="container">
          <div className='Bread-crumb'>
            <div className='Bread-crumb-head'>
            <h3 class="section-4-heading"> Contact<span class="Cart-c"> us</span> </h3>
            </div>
            <div className='Bread-crumb-tab'>
              <Breadcrumbs />
            </div>
          </div>
        </div>
      </div>


      <Contactform />
      <Newsletter />
    </div>
  )
}
