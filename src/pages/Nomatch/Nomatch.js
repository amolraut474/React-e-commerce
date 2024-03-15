import React from 'react'
import Card from '../../components/Home_Com/Card';
import Home_banner from '../../components/Home_Com/Home-banner';
import ProductList from '../../components/Product_Com/ProductList';
import Collection from '../../components/Collection_Com/Collection';
import ProductApp from '../../components/P_Com/ProductApp';
import Newsletter from '../../components/Newsletter-form/Newsletter';
export default function Nomatch() {
  return (
    <div>
     <Home_banner/>
     <Card/>
     <h1 class="Home-Page-Product-title">Exclusive Products</h1>
     <ProductList/>
     <Collection/>
     <ProductApp/>
     <Newsletter/>
    </div>
  )
}
