import React, { useState, useEffect } from "react";
import RestaurantCard from "../components/RestaurantCard";
import SpecialRestaurantCard from "../components/SpecialRestaurantCard"; 
import '../styles/home.css';

function Home() {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    // Fetch restaurant data from the backend
    fetch("http://localhost:5000/restaurants")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch restaurant data");
        }
        return response.json();
      })
      .then((data) => {
        setRestaurants(data);  
        setLoading(false);  
      })
      .catch((error) => {
        setError(error.message);  
        setLoading(false);  
      });
  }, []);  

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
