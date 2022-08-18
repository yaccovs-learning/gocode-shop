import React, { useEffect } from "react";
import Product from "../Product/Product";
import "./Products.css";

const Products = ({ listProducts = [] }) => {
  useEffect(() => console.log(listProducts), [listProducts]);
  const listProductsElements = listProducts.map((item) => (
    <Product key={item.id} info={item} />
  ));
  return <section className="products">{listProductsElements}</section>;
};

export default Products;
