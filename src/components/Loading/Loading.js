import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Loading.css";

const Products = ({ listProducts = [] }) => {
  const listProductsElements = listProducts.map((item) => (
    <Product key={item.id} info={item} />
  ));
  
  return (
    <section className="products">
      {listProducts.length !== 0 ? (
        listProductsElements
      ) : (
        <span className="still-loading"/>
      )}
    </section>
  );
};

export default Products;
