import React from "react";
import './FilterSortBy.css'

export const FilterBy = ({categories, setSelectCat}) => {
  const options = categories;
  const optionsElements = options.map((txtOpt, i) => (
    <option key={txtOpt}  value={txtOpt}>
      {txtOpt}
    </option>
  ));
  return (
    <div className="collection-sort">
      <label>Filter by:</label>
      <select onChange={(e) => {setSelectCat(e.target.value)}} >
        <option value="">All Products</option>
        {optionsElements}
      </select>
    </div>
  );
};

export const SortBy = () => {
  const options = [
      "Best Selling",
      "Alphabetically, A-Z",
      "Alphabetically, Z-A",
      "Price, low to high",
      "Price, high to low",
      "Date, new to old",
      "Date, old to new",
    ];
    const optionsElements = options.map((txtOpt, i) => (
      <option key={txtOpt} value={txtOpt}>
        {txtOpt}
      </option>
    ));
  
    return (
      <div className="collection-sort">
        <label>Sort by:</label>
        <select>
          <option value="/">Featured</option>
          {optionsElements}
        </select>
      </div>
    );
  }
