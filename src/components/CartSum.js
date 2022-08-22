import React, { useContext, useEffect, useState } from "react";
import CartContext from "../CartContext";

const CartSum = ({ listProducts }) => {
  const [cartProducts] = useContext(CartContext);
  const [sumPriceProducts, setSumPriceProducts] = useState();
  useEffect(() => {
    setSumPriceProducts(
      cartProducts
        .reduce((prev, prodCart) => {
          return (
            prev +
            (listProducts.find((prd) => prd.id === prodCart.id)?.price || 0) *
              prodCart.amount
          );
        }, 0)
        .toFixed(2)
    );
  }, [cartProducts]);

  return <div className="sum-cart">Subtotal: ${sumPriceProducts}</div>;
};

export default CartSum;
