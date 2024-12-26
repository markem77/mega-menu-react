import React from "react";
import "./stock_card2.css";

const Stock_Card2 = ({ logoUrl, title, subtitle, price, currency, change }) => {
  const changeClass = change > 0 ? "positive" : "negative";

  return (
    <div className="stock-cagri">
      <div className="stock-card-header">
        <img src={logoUrl} alt={title} className="stock-logo" />
        <div className="stock-details">
          <h3 className="stock-title">
            {title} <span className="stock-badge">D</span>
          </h3>
          <p className="stock-subtitle">{subtitle}</p>
        </div>
      </div>
      <div className="stock-cagri-content">
        <span className="stock-price">
          {price} <span className="stock-currency">{currency}</span>
        </span>
        <span className={`stock-change ${changeClass}`}>
          {change > 0 ? `+${change}%` : `${change}%`}
        </span>
      </div>
    </div>
  );
};

export default Stock_Card2;
