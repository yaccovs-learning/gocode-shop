import React, { useContext, useState, useEffect } from "react";
import StoreContext from "../../StoreContext";
import "./ChangeAmount.css";

const ChangeAmount = ({ id }) => {
  const {cartProducts, setCartProducts} = useContext(StoreContext);

  const [amount, setAmount] = useState(
    cartProducts.find((prd) => prd.id === id)?.amount || 0
  );

  useEffect(() => {
    const cartProductIndex = cartProducts.findIndex((prd) => prd.id === id);
    if (cartProductIndex === -1) {
      setCartProducts((prev) => {
        const arr = prev.slice();
        arr.push({ id, amount });
        return arr;
      });
    } else {
      setCartProducts((prev) => {
        const arr = prev.slice();
        arr[cartProductIndex] = { id, amount };
        return arr;
      });
    }
  }, [amount]);


  useEffect(() => {
    const prd = cartProducts.find((prd) => prd.id === id)
    if (prd) setAmount(prd.amount);
  }, [cartProducts]);


  return (
    <div className="change-amount">
      {" "}
      <button onClick={() => setAmount((prev) => prev + 1)}>+</button>
      <div>{amount}</div>
      <button
        onClick={() => setAmount((prev) => (prev === 0 ? prev : prev - 1))}
      >
        -
      </button>
    </div>
  );
};

export default ChangeAmount;
