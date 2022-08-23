import React, { useContext, useEffect, useState } from "react";
import Product from "../../components/Product/Product";
import Loading from "../../components/Loading/Loading";
import "./Products.css";
import StoreContext from "../../StoreContext";
import { FilterBy, SortBy } from "../../components/FilterSortBy/FilterSortBy";

const Products = () => {
  const { listProducts = [], selectCat, sortObj } = useContext(StoreContext);
  const [listProductsElements, setListProductsElements] = useState([]);
  useEffect(() => {
    const listProductsByCategory = selectCat
      ? listProducts.filter((prd) => prd.category === selectCat)
      : listProducts;

    const listProductsSort = sortObj
      ? listProductsByCategory.sort(sortObj.func)
      : listProductsByCategory;

    setListProductsElements(
      listProductsSort.map((item) => (
        <Product key={item.id} productId={item.id} />
      ))
    );
  }, [sortObj, selectCat, listProducts]);
  return (
    <>
    <div className="sort-container">
      <div className="sort">
        <FilterBy />
        <SortBy />
      </div>
      </div>
      <section className="products">
        {listProducts.length !== 0 ? listProductsElements : <Loading />}
      </section>
    </>
  );
};

export default Products;
