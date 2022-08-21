import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import Loading from "../Loading/Loading";
import "./Products.css";

const Products = ({ listProducts = [] }) => {
  const listProductsElements = listProducts.map((item) => (
    <Product key={item.id} info={item} />
  ));

  return (
    <section className="products">
      {listProducts.length !== 0 ? (
        listProductsElements
      ) : (
        <Loading />
      )}
    </section>
  );
};

export default Products;
