import React from "react";
import useClock from "../../customHooks/useClock";
import { FilterBy, SortBy } from "../FilterSortBy/FilterSortBy";
import CartSum from "../CartSum";
import "./Header.css";

const Header = ({
  listProducts,
  categories,
  setSelectCat,
  sortObj,
  setSortObj,
}) => {
  const clock = useClock();

  return (
    <nav className="product-filter">
      <h1>MyStore</h1>
      <h2>{clock}</h2>
      <CartSum listProducts={listProducts} />
      <div className="sort">
        <FilterBy categories={categories} setSelectCat={setSelectCat} />
        <SortBy setSortObj={setSortObj} />
      </div>
    </nav>
  );
};

export default Header;
