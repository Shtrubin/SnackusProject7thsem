import React from "react";
import "../styles/specialCard.css";
import { useNavigate } from "react-router-dom";

function SpecialRestaurantCard({ restaurant }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/restaurant/${restaurant.id}`);
  };
  return (
    <div className="special-card" onClick={handleClick}>
      <img src={restaurant.photo_url} alt={restaurant.restaurant_name} />  
      <div className="special-card-body">
        <h3>{restaurant.title}</h3>
        <h3>{restaurant.restaurant_name}</h3>
        <p>{restaurant.description}</p>
          <span className="special-rate">⭐ Rating: {restaurant.rating}</span>
          <span className="special-location">📍 {restaurant.location}</span>
      </div>
    </div>
  );
}

export default SpecialRestaurantCard;
