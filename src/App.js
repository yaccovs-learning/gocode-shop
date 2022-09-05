import { useState, useEffect } from "react";
import "./App.css";
import StoreContext from "./StoreContext";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import Routing from "./components/Routing/Routing";
import axios from "axios";

function App() {
  const [listProducts, setListProducts] = useState([]);
  const [selectCat, setSelectCat] = useState("");
  const [sortObj, setSortObj] = useState({
    name: "Alphabetically, A-Z",
    func: (a, b) => {},
    asc: 1,
  });

  const minMax = {
    min: useState(Infinity),
    max: useState(-Infinity),
  };

  const getProductsFromApi = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/products");
      const products = await response.data;
      setListProducts(products);
    } catch (e) {
      // const response = await fetch("https://bedecked-stone-turret.glitch.me/products");
      // const products = await response.json();
      // setListProducts(products);
      console.log('not connected to server')
    } //
  };

  const changeListProducts = (newList) => {
    setListProducts(newList)};

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    setCategories(
      listProducts
        .map((p) => p.category)
        .filter((value, index, array) => array.indexOf(value) === index)
    );
  }, [listProducts]);

  const [cartProducts, setCartProducts] = useState([]);
  useEffect(() => {
    getProductsFromApi();
  }, []);

  return (
    <StoreContext.Provider
      value={{
        getProductsFromApi,
        cartProducts,
        setCartProducts,
        listProducts,
        setListProducts,
        categories,
        sortObj,
        setSortObj,
        selectCat,
        setSelectCat,
        minMax,
        changeListProducts
      }}
    >
      <div>
        <Header />
        <Routing />
        <Cart asView={false} />
      </div>
    </StoreContext.Provider>
  );
}

export default App;
