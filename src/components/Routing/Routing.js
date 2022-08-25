import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import About from "../../views/About/About";
import Manage from "../../views/Manage/Manage";
import Products from "../../views/Products/Products";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Routing.css";

const Routing = () => {
  const isAdmin = true;
  return (
    <BrowserRouter>
      <div className="router-links">
        <Link className="links" to="/">Store</Link>
        <Link className="links" to="cart">Cart</Link>
        {isAdmin && <Link className="links" to="manage">Store Management</Link>}
        <Link className="links" to="about">About Store</Link>
      </div>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="about" element={<About />} />
        <Route path="manage" element={<Manage />} />
        <Route path="cart" element={<Cart asView={true} />} />
        <Route path="product">
          <Route path=":productId" element={<Product asView={true} />} />
        </Route>
        <Route path="*" element={<div>404!</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
