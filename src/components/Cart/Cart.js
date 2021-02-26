import React from 'react';

const Cart = (props) => {
  const cart = props.cart;
  let total = 0;
  for(let i=0; i<cart.length; i++){
    const product = cart[i];
    total = total + product.price;
  }
  let tax = 0;
  if(total < 0){
    tax = 0;
  }
  else if(total > 50){
    tax = 12.99
  }
  else if(total > 15){
    tax = 4.99;
  }
  const properPrice = (num)=>{
    const precision = num.toFixed(2)
    return Number(precision)
  }
  
  return (
    <div>
      <h2>Order summery</h2>
      <p>Total items selected: {cart.length} </p>
      <p>total price: {properPrice(total)}</p>
      <p>shipping: {tax} </p>
      <p>total cost: {properPrice(tax + total)} </p>
    </div>
  );
};

export default Cart;