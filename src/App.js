import { useState, useEffect, useContext } from "react";
import "./App.css";
import CartContext from "./CartContext";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";

function App() {
  const [listProducts, setListProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectCat, setSelectCat] = useState("");
  const [sortObj, setSortObj] = useState({ name: "Alphabetically, A-Z", func: (a,b) => {}, asc: 1});

  const getProductsFromApi = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    setListProducts(products);
  };

  const [cartProducts, setCartProducts] = useState([]);
  useEffect(() => {
    getProductsFromApi();
  }, []);

  useEffect(() => {
    setCategories(
      listProducts
        .map((p) => p.category)
        .filter((value, index, array) => array.indexOf(value) === index)
    );
  }, [listProducts]);

  useEffect(() => {
    console.log(cartProducts);
  }, []);
  return (
    <CartContext.Provider value={[cartProducts, setCartProducts]}>
      <div>
        <Header
          listProducts={listProducts}
          categories={categories}
          setSelectCat={setSelectCat}
          sortObj={sortObj}
          setSortObj={setSortObj}
        />
        <Products
          listProducts={listProducts}
          selectCat={selectCat}
          sortObj={sortObj}
        />
        <Cart listProducts={listProducts} />
      </div>
    </CartContext.Provider>
  );
}

export default App;
