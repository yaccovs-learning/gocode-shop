import React, { useContext, useEffect, useState } from "react";
import CartContext from "../StoreContext";

const CartSum = () => {
  const {cartProducts,listProducts} = useContext(CartContext);
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
  }, [cartProducts, listProducts]);

  return <div className="sum-cart">Subtotal: ${sumPriceProducts}</div>;
};

export default CartSum;
