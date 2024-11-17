import React from "react";
import "../styles/specialCard.css";

function SpecialRestaurantCard({ restaurant }) {
  return (
    <div className="special-card">
      <img src={restaurant.restaurantPhotoUrl} alt={restaurant.restaurantName} />
      <div className="special-card-body">
        <h3>{restaurant.restaurantName}</h3>
        <p>{restaurant.description}</p>
          <span className="special-rate">⭐ Rating: {restaurant.rate}</span>
          <span className="special-location">📍 {restaurant.location}</span>
      </div>
    </div>
  );
}

export default SpecialRestaurantCard;
