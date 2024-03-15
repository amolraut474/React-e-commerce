
import ProductList from '../components/Product_Com/ProductList';
import Newsletter from '../components/Newsletter-form/Newsletter';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
function Products() {
    return <>
    <div className='Bread-crumb-section'>
        <div className="container">
          <div className='Bread-crumb'>
            <div className='Bread-crumb-head'>
            <h3 class="section-4-heading">Products<span class="Cart-c"> List</span> </h3>
            </div>
            <div className='Bread-crumb-tab'>
              <Breadcrumbs />
            </div>
          </div>
        </div>
      </div>
     <ProductList/>
     <Newsletter/>

    </>
}
export default Products;