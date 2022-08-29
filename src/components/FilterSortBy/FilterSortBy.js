import { Slider } from "@mui/material";
import React, { useContext, useState, useEffect } from "react";
import StoreContext from "../../StoreContext";
import "./FilterSortBy.css";

export const FilterAndSort = () => {
  return (
    <div className="sort-container">
      <div className="sort">
        <FilterBy />
        <SortBy />
        <SliderPrice />
      </div>
    </div>
  );
};

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
      func: (b, a) => (a.title > b.title ? 1 : -1),
    },
    {
      name: "Price, low to high",
      func: (a, b) => a.price - b.price,
    },
    {
      name: "Price, high to low",
      func: (b, a) => a.price - b.price,
    },
    { name: "Date, new to old", func: (a, b) => a.id - b.id },
    { name: "Date, old to new", func: (b, a) => a.id - b.id },
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

export const SliderPrice = () => {
  const { listProducts, minMax } = useContext(StoreContext);

  const [min, setMin] = minMax.min;
  const [max, setMax] = minMax.max;
  const [marks, setMarks] = useState([]);
  const [highest, setHighest] = useState(Infinity);
  const [lowest, setLowest] = useState(-Infinity);

  useEffect(() => {
    if (!listProducts ||  listProducts.length===0) return
    const prices = listProducts.map((product) => product.price);
    console.log("prices",prices)
    const tempHighest = Math.max(...prices);
    const tempLowest = Math.min(...prices);
    console.log(tempHighest,tempLowest)

    setMin(tempLowest);
    setMax(tempHighest);
    setHighest(tempHighest);
    setLowest(tempLowest);
    const newMarks = [
      { value: tempLowest, label: `$${tempLowest}` },
      { value: tempHighest, label: `$${tempHighest}` },
    ];
    setMarks(newMarks);
    console.log(min, max);
    // eslint-disable-next-line
  }, [listProducts]);

  return (
    <div className="slider">
      {/* <Slider defaultValue={30} step={10} marks min={10} max={110} /> */}
      <Slider
        min={lowest}
        max={highest}
        getAriaLabel={() => "Price range"}
        value={[min, max]}
        marks={marks}
        onChange={(e, newValues, ...o) => {
          setMin(newValues[0]);
          setMax(newValues[1]);
        }}
        valueLabelDisplay="auto"
        size="small"
      />
    </div>
  );
};
