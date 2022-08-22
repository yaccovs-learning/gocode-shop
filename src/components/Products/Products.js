import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import Loading from "../Loading/Loading";
import "./Products.css";

const Products = ({ listProducts = [], selectCat, sortObj }) => {
  const [listProductsElements, setListProductsElements] = useState([])
  useEffect(()=>{
  const listProductsByCategory = selectCat
    ? listProducts.filter((prd) => prd.category === selectCat)
    : listProducts;

  const listProductsSort = sortObj
    ? listProductsByCategory.sort(sortObj.func)
    : listProductsByCategory;


  setListProductsElements (listProductsSort.map((item) => (
    <Product key={item.id} info={item} />
  )));
},[sortObj,selectCat,listProducts])
  return (
    <section className="products">
      {listProducts.length !== 0 ? listProductsElements : <Loading />}
    </section>
  );
};

export default Products;
