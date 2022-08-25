import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import StoreContext from "../../StoreContext";
import ChangeAmount from "../ChangeAmount/ChangeAmount";
import Loading from "../Loading/Loading";
import Stars from "../Stars/Stars";
import "./Product.css";

const Product = ({ productId: productIdFromProp, asView }) => {
  const { listProducts, getProductsFromApi } = useContext(StoreContext);
  if (!listProducts) getProductsFromApi();

  const { productId: productIdFromParams } = useParams();

  const id =
    typeof productIdFromProp !== "undefined"
      ? productIdFromProp
      : Number(productIdFromParams);
  const info = listProducts.find((prd) => prd.id === id);

  return listProducts.length > 0 ? (
    <div className="product-card" title={info.description}>
      <div className="product-image">
        <img src={info.image} alt={info.title} />
      </div>
      <div className="product-info">
        <h5>
          <Link to={`/product/${info.id}`}>{info.title}</Link>
        </h5>
        <h6>{info.category}</h6>
        {asView && <div className="description">{info.description}</div>}
        <h5>${info.price}</h5>
        <Stars rate={info.rating.rate} count={info.rating.count} />
      </div>
      <ChangeAmount id={info.id} />
    </div>
  ) : (
    <Loading />
  );
};

export default Product;
