import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
} from "@mui/material";
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
    <Card sx={{}} className="product-card" title={info.description}>
      <CardActionArea classeName="product-card-link" component={Link} to={`/product/${info.id}`}>
        <CardMedia component="img" image={info.image} alt={info.title} />
        <CardContent className="product-card-info">
          <h5>{info.title}</h5>
          <h6>{info.category}</h6>
          {asView && <div className="description">{info.description}</div>}
          <h5>${info.price}</h5>
        </CardContent>
      </CardActionArea>
      <CardActions className="product-card-actions">
        <ChangeAmount id={info.id} />
        <Rating
          value={info.rating.rate}
          onChange={(e, value) => {
            const prevRate = info.rating.rate;
            const prevCount = info.rating.count;
            const newCount = ++info.rating.count;
            info.rating.rate =
              value / newCount + prevRate * (prevCount / newCount);
            console.log(value);
          }}
        />{" "}
        {info.rating.count}
      </CardActions>
    </Card>
  ) : (
    <Loading />
  );
};

export default Product;

/*
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
    */
