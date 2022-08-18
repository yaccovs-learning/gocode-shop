import React from "react";
import './FilterSortBy.css'

export const FilterBy = () => {
  const options = [
    "2016",
    "jacket",
    "Jackets",
    "layers",
    "Obermeyer",
    "Roxy",
    "womens",
  ];
  const optionsElements = options.map((txtOpt, i) => (
    <option key={txtOpt} value="/">
      {txtOpt}
    </option>
  ));
  return (
    <div className="collection-sort">
      <label>Filter by:</label>
      <select>
        <option value="/">All Jackets</option>
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
      <option key={txtOpt} value="/">
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
