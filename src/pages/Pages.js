import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import Newsletter from '../components/Newsletter-form/Newsletter';
import Card from '../components/Home_Com/Card';
export default function Pages() {
  return (
    <div>
  <div className='Bread-crumb-section'>
        <div className="container">
          <div className='Bread-crumb'>
            <div className='Bread-crumb-head'>
            <h3 class="section-4-heading"> Pages<span class="Cart-c"> About</span> </h3>
            </div>
            <div className='Bread-crumb-tab'>
              <Breadcrumbs />
            </div>
          </div>
        </div>
      </div>
      <Card/>
      <Newsletter/>
    </div>
  )
}
