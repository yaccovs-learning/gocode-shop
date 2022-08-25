import React, { useContext } from "react";
import StoreContext from "../../StoreContext";
import "./FilterSortBy.css";

export const FilterBy = () => {
  const { categories, setSelectCat } = useContext(StoreContext);


  const optionsElements = categories.map((txtOpt, i) => (
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
