import React from "react";
import "./marketCard.css";
import { useState, useEffect } from "react";
import Chart from '../Chart/Chart';




const MarketCard = ({ market }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 749);
    };

    handleResize(); // Vérifie la taille dès le premier rendu
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <div className="market-card">
      {isMobile ? (
        <div className="datcont">
          <div className="cirinfo">
            <div className="circle">{market.symbol}</div>
            <div className="info"><h3>{market.name}</h3></div>
          </div>
          <div className="datcont2">
            <p>{market.value}</p>
            <p
              className={`change ${
                market.change.startsWith("-") ? "negative" : "positive"
              }`}
            >
              {market.change}
            </p>
          </div>
          <div className="market-chart">
            <Chart isMobile={true}  className="custom-chart" hideInDesktop={true}/> 
          </div>

        </div>
      ) : (
        <>
          <div className="circle">{market.symbol}</div>
          <div className="datcont">
            <div className="info"><h3>{market.name}</h3></div>
            <div className="datcont2">
              <p>{market.value}</p>
              <p
                className={`change ${
                  market.change.startsWith("-") ? "negative" : "positive"
                }`}
              >
                {market.change}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MarketCard;