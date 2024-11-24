import React from "react";
import RestaurantCard from "../components/RestaurantCard";
import SpecialRestaurantCard from "../components/SpecialRestaurantCard"; 
import '../styles/home.css';
import restaurants from "../restaurantData";

function Home() {
  return (
    <>
    <div className="container">
      <div className="special-card-container">
        {restaurants.length > 0 && (
          <SpecialRestaurantCard restaurant={restaurants[0]} />
        )}
      </div>

      <div className="card-container">
        {restaurants.slice(1).map((restaurant) => (
          <RestaurantCard key={restaurant.restaurantName} restaurant={restaurant} />
        ))}
      </div>
    </div>
    </>
  );
}

export default Home;
