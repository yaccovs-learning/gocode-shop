import React, { useContext, useState, useEffect } from "react";
import ChangeAmount from "../ChangeAmount/ChangeAmount";
import Stars from "../Stars";
import "./Product.css";

const Product = ({ info }) => {
  const {
    title,
    category,
    price,
    image,
    description,
    id,
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
        <ChangeAmount id={id} />
    </div>
  );
};

export default Product;
