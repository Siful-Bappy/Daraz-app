import React from "react";
import "./Cart.css";

const Cart = (props) => {
    const {cart} = props;
    console.log(cart);
    // let totalPrice = (previousValue, currentValue) => {
    //     return previousValue + currentValue.price;
    // }
    // const total = cart.reduce(totalPrice, 0);
    
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart) {
        quantity = quantity + product.quantity;
        total = total + (product.price * quantity);
        shipping = shipping + (product.shipping * quantity);
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;
  return (
    <div className="cart">
      <h3>Order Summary</h3>
      <p>Selected Items: {cart.length}</p>
      <p>Total price: {total}</p>
      <p>Total Shipping: {shipping}</p>
      <p>Tax: {tax}</p>
      <h4>Grand Total: {grandTotal}</h4>
    </div>
  );
};

export default Cart;
