import { Rating } from "@mui/material";
import {axios} from "../../BaseUrl";

import React, { useState } from "react";

const Stars = ({ rate, count, productId }) => {
  const [rating,setRating] = useState({rate,count})
  console.log({ rate, count, productId })
  return (
    <>
      <Rating
        value={rating.rate}
        onChange={async (e, value) => {
          const newRating = await axios.put(`/api/products/rating/${productId}`, { rate: value });
          console.log(newRating);
          setRating(newRating.data);
          
        }}
      />
      {rating.count}
    </>
  );
};

export default Stars;
