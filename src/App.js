import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";

function App() {
  const [listProducts, setListProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setListProducts(data);
      });
  }, []);
  return (
    <div>
      <Header />
      <Products listProducts={listProducts} />
    </div>
  );
}

export default App;
