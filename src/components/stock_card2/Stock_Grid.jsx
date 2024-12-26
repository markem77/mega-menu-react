import React from "react";
import Stock_card2 from "./Stock_card2";
import "./stock_card2.css";

const Stock_Grid = () => {
  const stocksData = [
    {
      id: 1,
      title: "LVMH",
      subtitle: "MC",
      logoUrl: "https://via.placeholder.com/50", // Remplace par ton logo
      price: 636.5,
      currency: "EUR",
      change: 0.14,
    },
    {
      id: 2,
      title: "SCHNEIDER ELECTRIC",
      subtitle: "SU",
      logoUrl: "https://via.placeholder.com/50",
      price: 248.15,
      currency: "EUR",
      change: 0.92,
    },
    {
      id: 3,
      title: "SANOFI",
      subtitle: "SAN",
      logoUrl: "https://via.placeholder.com/50",
      price: 91.8,
      currency: "EUR",
      change: 0.07,
    },
    {
      id: 4,
      title: "TOTALENERGIES",
      subtitle: "TTE",
      logoUrl: "https://via.placeholder.com/50",
      price: 52.2,
      currency: "EUR",
      change: 1.01,
    },
    {
      id: 5,
      title: "BNP PARIBAS ACT.A",
      subtitle: "BNP",
      logoUrl: "https://via.placeholder.com/50",
      price: 58.63,
      currency: "EUR",
      change: 0.65,
    },
    {
      id: 6,
      title: "L'OREAL",
      subtitle: "OR",
      logoUrl: "https://via.placeholder.com/50",
      price: 342,
      currency: "EUR",
      change: -0.83,
    },
  ];

  return (
    <div className="stock-grid">
      {stocksData.map((stock) => (
        <Stock_card2
          key={stock.id}
          logoUrl={stock.logoUrl}
          title={stock.title}
          subtitle={stock.subtitle}
          price={stock.price}
          currency={stock.currency}
          change={stock.change}
        />
      ))}
    </div>
  );
};

export default Stock_Grid;
