import React from "react";
import Stock from "./Stock";

function PortfolioContainer({myPortStocks}) {
  const myPortArr = myPortStocks.map(stock => (
      <Stock 
        key={stock.id}
        stock={stock}
      />
    ))
    
    return (

    <div>
      <h2>My Portfolio</h2>
      {myPortArr}
    </div>
  );
}

export default PortfolioContainer;
