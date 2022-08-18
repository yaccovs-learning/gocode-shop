import React from "react";
import Stars from "../Stars";
import './Product.css'

const Product = ({ info }) => {
  const {
    title,
    category,
    price,
    image,
    description,
    rating: { rate, count },
  } = info;
  return (
    <div className="product-card" title={description}>
      <div className="product-image">
        <img src={image} />
      </div>
      <div className="product-info">
        <h5>{title}</h5>
        <h6>{category}</h6>
        <h5>${price}</h5>
        <Stars rate={rate} count={count} />
      </div>
    </div>
  );
};

export default Product;
