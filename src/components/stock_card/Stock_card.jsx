import React from 'react';
import "./stock_card.css";


const Stock_card = ({ market }) => {
    const {logoUrl, title, subtitle, price, currency, change} = market;
    console.log('StockCard Props:', { logoUrl, title, subtitle, price, currency, change });
  return (
    <div className="stock-card">
      <div className="stock-card-header">
        <img src={logoUrl} alt={title} className="stock-logo" />   
        <div className="stock-details">
          <h3 className="stock-title">
            {title} <span className="stock-badge">D</span>
          </h3>
          <p className="stock-subtitle">{subtitle}</p>
        </div>
      </div>
      <div className="stock-card-content">
        <span className="stock-price">
          {price} <span className="stock-currency">{currency}</span>
        </span>
        <span className={`stock-change ${change > 0 ? 'positive' : 'negative'}`}>
          {change > 0 ? `+${change}%` : `${change}%`}
        </span>
      </div>
    </div>
  );
};

export default Stock_card;
