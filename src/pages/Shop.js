import ProductList from '../components/Product_Com/ProductList';
import ProductApp from'../components/P_Com/ProductApp';
import  Newsletter from '../components/Newsletter-form/Newsletter';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
function Shop() {
    return <>
<div className='Bread-crumb-section'>
        <div className="container">
          <div className='Bread-crumb'>
            <div className='Bread-crumb-head'>
            <h3 class="section-4-heading"> Shop <span class="Cart-c"> Now</span> </h3>
            </div>
            <div className='Bread-crumb-tab'>
              <Breadcrumbs />
            </div>
          </div>
        </div>
      </div>


      <ProductApp/>
    <ProductList/>
    
    <Newsletter/>


    </>
}
export default Shop;