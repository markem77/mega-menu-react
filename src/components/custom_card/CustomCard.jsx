import React from "react";
import "./customCard.css";


function CustomCard({ market }) {
    const { imageUrl, 
        title, 
        description, 
        author, 
        time, 
        comments, 
        likes } = market;
        
    console.log("Image URL:", imageUrl); 
  return (
    <div className="custom-card">
      {/* Image principale */}
      <div className="custom-card-image">
        <img src={imageUrl} alt="Card" />
      </div>

      {/* Contenu principal */}
      <div className="custom-card-content">
        <h2 className="custom-card-title">{title}</h2>
        <p className="custom-card-description">{description}</p>
        <p className="custom-card-author">par <strong>{author}</strong></p>
        <p className="custom-card-time">{time}</p>

        {/* Section des actions */}
        <div className="custom-card-actions">
          <span className="comments">💬 {comments}</span>
          <span className="likes">👍 {likes}</span>
        </div>
      </div>
    </div>
  );
}

export default CustomCard;
