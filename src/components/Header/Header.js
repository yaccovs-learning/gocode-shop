import React from "react";
import useClock from "../../customHooks/useClock";
import CartSum from "../CartSum";
import "./Header.css";

const Header = () => {
  const clock = useClock();

  return (
    <nav className="product-filter">
      <h1>MyStore</h1>
      <h2>{clock}</h2>
      <CartSum />
    </nav>
  );
};

export default Header;
