import { useState, useEffect } from "react";
import "./App.css";
import StoreContext from "./StoreContext";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import Routing from "./components/Routing";

function App() {
  const [listProducts, setListProducts] = useState([]);
  const [selectCat, setSelectCat] = useState("");
  const [sortObj, setSortObj] = useState({
    name: "Alphabetically, A-Z",
    func: (a, b) => {},
    asc: 1,
  });

  const getProductsFromApi = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    setListProducts(products);
  };

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
        sortObj,
        setSortObj,
        selectCat,
        setSelectCat,
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
