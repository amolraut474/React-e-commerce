// ProductSlider.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Product from './Product';
const ProductSlider = ({ products }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Adjust this breakpoint as needed for your design
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {products.map((product) => (
        <Product
          key={product.id}
          name={product.name}
          price={product.product_price}
          imageUrl={product.imageUrl}
          
          
        />


        
        
      ))}
    </Slider>
  );
};

export default ProductSlider;