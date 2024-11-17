import React from "react";
import "../styles/restaurantCard.css";

function RestaurantCard({ restaurant }) {
  return (
    <div className="card">
      <img src={restaurant.restaurantPhotoUrl} alt={restaurant.restaurantName} />
      <div className="card-body">
        <h3>{restaurant.restaurantName}</h3>
        <p>{restaurant.description}</p>
        <div className="rate-location">
          <span className="rate">⭐ Rating: {restaurant.rate}</span>
          <span className="location">📍 {restaurant.location}</span>
        </div>
      </div>
    </div>
  );
}

export default RestaurantCard;
