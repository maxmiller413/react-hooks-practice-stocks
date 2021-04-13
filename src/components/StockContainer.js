import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, setMyPortStocks}) {

  const stocksArr = stocks.map(stock => (
    <Stock 
      key={stock.id}
      stock={stock}
      setMyPortStocks={setMyPortStocks}
    />
  ))
  return (
    <div>
      <h2>Stocks</h2>
      {stocksArr}
    </div>
  );
}

export default StockContainer;
