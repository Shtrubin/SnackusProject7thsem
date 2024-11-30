import React, { useState, useContext } from "react";
import RestaurantContext from "../context/RestaurantContext";
import RestaurantCard from "../components/RestaurantCard";
import  '../styles/search.css'

const Search = () => {
  const { restaurants, loading, error } = useContext(RestaurantContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);

  // Handle search input change
  const handleSearchChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter the restaurants based on the search query
    const filteredData = restaurants.filter((restaurant) => {   
      return (
        restaurant.restaurant_name.toLowerCase().includes(query) ||
        restaurant.location.toLowerCase().includes(query) ||
        restaurant.description.toLowerCase().includes(query) ||
        restaurant.category.toLowerCase().includes(query) ||
        restaurant.special_item.toLowerCase().includes(query) ||
        restaurant.sub_location.toLowerCase().includes(query)
      );
    });

    setFilteredRestaurants(filteredData);
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="search-container">
      <div>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search restaurants"
        />
      </div>

      <div className="restaurant-list">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))
        ) : (
          <p className="no-results">No restaurants found.</p>
        )}
      </div>
    </div>
  );
};

export default Search;