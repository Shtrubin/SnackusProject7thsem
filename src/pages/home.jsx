// Home.js
import React, { useContext } from "react";
import RestaurantCard from "../components/RestaurantCard";
import SpecialRestaurantCard from "../components/SpecialRestaurantCard";
import RestaurantContext from "../context/RestaurantContext"; // Import the context
import "../styles/home.css";

function Home() {
  const { restaurants, loading, error } = useContext(RestaurantContext); // Use the context

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
          <SpecialRestaurantCard restaurant={restaurants[0]} />
        )}
      </div>

      <div className="card-container">
        {restaurants.slice(1).map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
}

export default Home;
