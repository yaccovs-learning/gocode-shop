import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";

function App() {
  const [listProducts, setListProducts] = useState([]);

  const getProductsFromApi = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    setListProducts(products);
  };
  useEffect(() => {
    getProductsFromApi();
  }, []);
  return (
    <div>
      <Header />
      <Products listProducts={listProducts} />
    </div>
  );
}

export default App;
