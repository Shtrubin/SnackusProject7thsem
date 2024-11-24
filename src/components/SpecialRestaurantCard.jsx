import React from "react";
import "../styles/specialCard.css";

function SpecialRestaurantCard({ restaurant }) {
  return (
    <div className="special-card">
      <img src={restaurant.photo_url} alt={restaurant.restaurant_name} />  
      <div className="special-card-body">
        <h3>{restaurant.restaurant_name}</h3>
        <p>{restaurant.description}</p>
          <span className="special-rate">⭐ Rating: {restaurant.rating}</span>
          <span className="special-location">📍 {restaurant.location}</span>
      </div>
    </div>
  );
}

export default SpecialRestaurantCard;
