import React, { useContext, useState, useEffect } from "react";
import StoreContext from "../../StoreContext";
import "./ChangeAmount.css";

const ChangeAmount = ({ id }) => {
  const { cartProducts, setCartProducts } = useContext(StoreContext);

  const [amount, setAmount] = useState(
    cartProducts.find((prd) => prd.id === id)?.amount || 0
  );

  const cartProductIndex = cartProducts.findIndex((prd) => prd.id === id);

  useEffect(() => {
    setAmount(cartProducts.find((prd) => prd.id === id)?.amount || 0);
  }, [cartProducts]);

  const changeAmount = (change) => {
    let sum = amount + change;
    if (sum < 0) sum = 0;
    setAmount(sum);
    if (cartProductIndex === -1) {
      setCartProducts((prev) => {
        const arr = prev.slice();
        arr.push({ id, amount: sum });
        return arr;
      });
    } else {
      setCartProducts((prev) => {
        const arr = prev.slice();
        arr[cartProductIndex] = { id, amount: sum };
        return arr;
      });
    }
  };

  return (
    <div className="change-amount">
      {" "}
      <button onClick={() => changeAmount(1)}>+</button>
      <div>{amount}</div>
      <button onClick={() => changeAmount(-1)}>-</button>
    </div>
  );
};

export default ChangeAmount;
