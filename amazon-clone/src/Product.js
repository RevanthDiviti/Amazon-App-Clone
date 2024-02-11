import React from 'react';
import './Product.css'

function Product({title, image,price,rating}) { //1:23:53
  return (
    <div className='product'>
      <div className='product__info'>
        <p>The lean Startup</p>
        <p className='product__price'>
            <small>$</small>
            <strong>19.99</strong>
        </p>
        <div className='product__rating'>
            <p>⭐</p>
        </div>
      </div>
      <img src='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg' alt='No Image' />
      <button>Add to Basket</button>
    </div>
  )
}

export default Product;
