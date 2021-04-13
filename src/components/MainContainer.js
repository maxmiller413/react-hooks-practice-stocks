import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [stocks, setStocks] = useState([])
  const [myPortStocks, setMyPortStocks] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then(r => r.json())
      .then(data => setStocks(data))
  }, [])

  function handleMyPortStocks(v){
    const updatedStocks = [...myPortStocks, v]
    setMyPortStocks(updatedStocks)
  }

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} setMyPortStocks={handleMyPortStocks}/>
        </div>
        <div className="col-4">
          <PortfolioContainer myPortStocks={myPortStocks}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
