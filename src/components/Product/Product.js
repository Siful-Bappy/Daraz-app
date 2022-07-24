import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from "react";
import "./Products.css";

const Product = (props) => {
  // console.log(props.product);
  const {handleAddToCart, product} = props;
  const {id, img, name, seller, price, ratings } = product;
  // console.log(props);

  return (
    <div className="product">
      <img src={img} alt="Image of product" />
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p>Price: ${price}</p>
        <p>
          <small>Seller: {seller}</small>
        </p>
        <p>
          <small>Ratings: {ratings}</small>
        </p>
      </div>
      <button onClick={() => handleAddToCart(product)} className="btn-cart">
        <p>Add to Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
