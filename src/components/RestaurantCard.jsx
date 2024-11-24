import React from "react";
import "../styles/restaurantCard.css";

function RestaurantCard({ restaurant }) {
  return (
    <div className="card">
      <img src={restaurant.photo_url} alt={restaurant.restaurant_name} />
      <div className="card-body">
        <h3>{restaurant.restaurant_name}</h3>
        <p>{restaurant.description}</p>
        <div className="rate-location">
          <span className="rate">⭐ Rating: {restaurant.rating}</span>
          <span className="location">📍 {restaurant.location}</span>
        </div>
      </div>
    </div>
  );
}

export default RestaurantCard;
