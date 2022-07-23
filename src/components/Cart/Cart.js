import React from "react";

const Cart = (props) => {
    const {cart} = props;
    console.log(cart);
  return (
    <div>
      <h3>Order Summary</h3>
      <p>Selected Items: {cart.length}</p>
    </div>
  );
};

export default Cart;
