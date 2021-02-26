import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
  const {name, img, price, stock, seller} = props.pob;
  return (
    <div className="single-product">
      <div>
        <img src={img} alt=""/>
      </div>
      <div>
        <h2 className="product-name">{name}</h2>
        <p>by: {seller}</p>
        <p>price: ${price}</p>
        <p>Only {stock} left in stock</p>
        
        <button onClick={()=>props.click(props.pob)} className="main-button"><FontAwesomeIcon icon={faShoppingCart} />Add to cart</button>
      </div>
    </div>
  );
};

export default Product;