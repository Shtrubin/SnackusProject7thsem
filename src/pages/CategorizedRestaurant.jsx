// CategorizedRestaurant.js
import React, { useContext } from "react";
import RestaurantCard from "../components/RestaurantCard";
import SpecialRestaurantCard from "../components/SpecialRestaurantCard"; 
import RestaurantContext from "../context/RestaurantContext"; // Import the context
import '../styles/home.css';

function CategorizedRestaurant({category}) {
  // Use the context to access restaurant data
  const { restaurants, loading, error } = useContext(RestaurantContext);

  // Handle loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // Handle error state
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container">
      <div className="special-card-container">
        {/* Render special restaurant card only for local category */}
        {restaurants.length > 0 && (
          restaurants[0].category === category && (
            <SpecialRestaurantCard restaurant={restaurants[0]} />
          )
        )}
      </div>

      <div className="card-container">
        {/* Render local restaurants */}
        {restaurants.slice(1).map((restaurant) => (
          restaurant.category === category && (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          )
        ))}
      </div>
    </div>
  );
}

export default CategorizedRestaurant;
