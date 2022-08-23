import React, { useState, useEffect, useContext } from "react";
import StoreContext from "../../StoreContext";
import "./FilterSortBy.css";

export const FilterBy = () => {
  const { listProducts, setSelectCat } = useContext(StoreContext);

  const [options, setOptions] = useState([]);
  useEffect(() => {
    setOptions(
      listProducts
        .map((p) => p.category)
        .filter((value, index, array) => array.indexOf(value) === index)
    );
  }, [listProducts]);

  const optionsElements = options.map((txtOpt, i) => (
    <option key={txtOpt} value={txtOpt}>
      {txtOpt}
    </option>
  ));

  return (
    <div className="collection-sort">
      <label>Filter by:</label>
      <select
        onChange={(e) => {
          setSelectCat(e.target.value);
        }}
      >
        <option value="">All Products</option>
        {optionsElements}
      </select>
    </div>
  );
};

export const SortBy = () => {
  const { setSortObj } = useContext(StoreContext);
  const options = [
    {
      name: "Best Selling",
      func: (a, b) => {
        return b.rating.count - a.rating.count;
      },
    },
    {
      name: "Alphabetically, A-Z",
      func: (a, b) => (a.title > b.title ? 1 : -1),
    },
    {
      name: "Alphabetically, Z-A",
      func: (a, b) => (a.title > b.title ? -1 : 1),
    },
    {
      name: "Price, low to high",
      func: (a, b) => a.price - b.price,
    },
    {
      name: "Price, high to low",
      func: (a, b) => b.price - a.price,
    },
    { name: "Date, new to old", func: (a, b) => {} },
    { name: "Date, old to new", func: (a, b) => {} },
  ];

  const optionsElements = options.map((sortObject, i) => {
    return (
      <option key={sortObject.name} value={sortObject.name}>
        {sortObject.name}
      </option>
    );
  });

  return (
    <div className="collection-sort">
      <label>Sort by:</label>
      <select
        onChange={(e) => {
          setSortObj(options.find((sort) => sort.name === e.target.value));
        }}
      >
        <option value="">Featured</option>
        {optionsElements}
      </select>
    </div>
  );
};
