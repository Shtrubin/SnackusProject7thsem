// context/RestaurantContext.js
import React, { createContext, useState, useEffect } from "react";

// Create a Context for the restaurant data
const RestaurantContext = createContext();

// Create a Provider component
export const RestaurantProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch restaurant data from the backend
  useEffect(() => {
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

  return (
    <RestaurantContext.Provider value={{ restaurants, loading, error }}>
      {children}
    </RestaurantContext.Provider>
  );
};

export default RestaurantContext;
