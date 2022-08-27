import React, { useContext, useEffect, useState } from "react";
import Product from "../../components/Product/Product";
import Loading from "../../components/Loading/Loading";
import "./Products.css";
import StoreContext from "../../StoreContext";
import { FilterAndSort } from "../../components/FilterSortBy/FilterSortBy";

const Products = () => {
  const {
    listProducts = [],
    selectCat,
    sortObj,
    minMax: {
      min: [min],
      max: [max],
    },
  } = useContext(StoreContext);

  const [listProductsElements, setListProductsElements] = useState([]);

  useEffect(() => {
    const listProductsByCategory = selectCat
      ? listProducts.filter((prd) => prd.category === selectCat)
      : listProducts;

    const listProductsByMinMax = listProductsByCategory.filter(
      (prd) => prd.price >= min && prd.price <= max
    );    

    const listProductsSort = sortObj
      ? listProductsByMinMax.sort(sortObj.func)
      : listProductsByMinMax;

    setListProductsElements(
      listProductsSort.map((item) => (
        <Product key={item.id} productId={item.id} />
      ))
    );
  }, [sortObj, selectCat, listProducts, min, max]);

  return (
    <>
      <FilterAndSort />
      <section className="products">
        {listProducts.length !== 0 ? listProductsElements : <Loading />}
      </section>
    </>
  );
};

export default Products;
