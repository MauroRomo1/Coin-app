import React from "react";

const CoinIcon = (props) => {
  const { symbol } = props;
  return (
    <div>
      <img
        src={`https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`}
        alt=""
        className="img-icon"
      />
    </div>
  );
};

export default CoinIcon;
