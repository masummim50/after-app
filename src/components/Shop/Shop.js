import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
  const first10 = fakeData.slice(0,15);
  const [products, setProducts] = useState(first10);
  const [cart, setCart] = useState([]);
  // click button function
  const handleAddToCart = (clickedproduct) => {
    console.log('product added', clickedproduct);
    const newCart = [...cart, clickedproduct];
    setCart(newCart)
  }
  return (
    <div className="shop-container">
      <div className="product-container">
          {products.map(pd => <Product pob={pd} click = {handleAddToCart}></Product>)}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
      
    </div>
  );
};

export default Shop;