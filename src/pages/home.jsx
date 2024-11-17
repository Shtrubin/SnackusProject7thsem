import React from "react";
import RestaurantCard from "../components/RestaurantCard";
import '../styles/home.css'
import restaurants from "../restaurantData";

function Home() {
  return (
    <div className="container">
      <div className="card-container">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.restaurantName} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
}

export default Home;
