import React, { useContext } from "react";
import RestaurantCard from "../components/RestaurantCard";
import SpecialRestaurantCard from "../components/SpecialRestaurantCard"; 
import RestaurantContext from "../context/RestaurantContext"; 
import '../styles/home.css';

function CategorizedRestaurant({category}) {
  const { restaurants, loading, error } = useContext(RestaurantContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container">
      <div className="special-card-container">
        {restaurants.length > 0 && (
          restaurants[0].category === category && (
            <SpecialRestaurantCard restaurant={restaurants[0]} />
          )
        )}
      </div>

      <div className="card-container">
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
