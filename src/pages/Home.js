import React from 'react';
import '../components/Home_Com/Home.css';
import Home_banner from '../components/Home_Com/Home-banner';
import Card from '../components/Home_Com/Card';
import ProductList from '../components/Product_Com/ProductList';
import Collection from '../components/Collection_Com/Collection';
import ProductApp from'../components/P_Com/ProductApp';
import Newsletter from'../components/Newsletter-form/Newsletter';
export default function Home() {
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
