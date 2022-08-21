import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";

function App() {
  const [listProducts, setListProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectCat, setSelectCat] = useState("");
  const getProductsFromApi = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    setListProducts(products);
  };
  useEffect(() => {
    getProductsFromApi();
  }, []);

  useEffect(() => {
    setCategories(listProducts
      .map((p) => p.category)
      .filter((value, index, array) => array.indexOf(value) === index));
  }, [listProducts]);
  return (
    <div>
      <Header categories={categories} setSelectCat={setSelectCat} />
      <Products listProducts={listProducts} selectCat={selectCat}  />
    </div>
  );
}

export default App;
