import React, { useState, useEffect, useContext } from "react";
import StoreContext from "../../StoreContext";
import ChangeAmount from "../ChangeAmount/ChangeAmount";
import CartSum from "../CartSum";

import "./Cart.css";

const Cart = ({ asView }) => {
  const [openCloseCart, setOpenCloseCart] = useState(false);
  const { cartProducts, setCartProducts, listProducts } =
    useContext(StoreContext);

  const [productLines, setProductLines] = useState([]);

  const deleteFromCart = (id) => {
    setCartProducts((prev) => {
      const newArray = prev.slice();
      newArray.find((prd) => prd.id === id).amount = 0;
      console.log(newArray);
      return newArray;
    });
  };

  useEffect(() => {
    const filterCartProducts = cartProducts
      .filter((prd) => prd.amount > 0)
      .map((prdCrt) => {
        return {
          ...listProducts.find((prdLst) => prdLst._id === prdCrt.id),
          amount: prdCrt.amount,
        };
      });

    setProductLines(
      filterCartProducts.map((prd) => (
        <div key={prd._id} className="product-cart">
          <button onClick={() => deleteFromCart(prd._id)}>x</button>
          <img src={prd.image} alt={prd.description} />
          <span className="title">{prd.title}</span>
          {asView && <span className="price-unit">${(prd.price).toFixed(2)}</span>}
          <ChangeAmount id={prd._id} />
          <span className="price">${(prd.amount * prd.price).toFixed(2)}</span>
        </div>
      ))
    );
  }, [cartProducts, listProducts]);

  return asView ? (
    <div className="cart as-view">{productLines} <CartSum /></div>
   
    ) : (
    <>
      {openCloseCart && (
        <>
          <div className="cart side">{productLines}</div>
          <CartSum listProducts={listProducts} />
        </>
      )}
      <div
        className="btn-open-cart"
        onClick={() => setOpenCloseCart((prev) => !prev)}
      >
        🛒
      </div>
    </>
  );
};

export default Cart;
