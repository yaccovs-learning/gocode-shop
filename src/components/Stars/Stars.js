import React from "react";

const Stars = ({ rate, count }) => {
  let starsStr = "⭐".repeat(Math.round(rate));
  return (
    <h6>
      {starsStr} - {count}
    </h6>
  );
};

export default Stars;
