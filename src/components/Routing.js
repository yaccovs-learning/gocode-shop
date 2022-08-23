import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import About from "../views/About/About";
import Products from "../views/Products/Products";
import Cart from "./Cart/Cart";
import Product from "./Product/Product";

const Routing = () => {
  return (
    <BrowserRouter>
      <Link to="/">Store</Link> - <Link to="cart">Cart</Link> -{" "}
      <Link to="about">About Store</Link>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="about" element={<About />} />
        <Route path="cart" element={<Cart asView={true}/>} />
        <Route path="product">
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="*" element={<div>404!</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
