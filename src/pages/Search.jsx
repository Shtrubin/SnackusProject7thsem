import React, { useState, useContext } from "react";
import RestaurantContext from "../context/RestaurantContext";
import RestaurantCard from "../components/RestaurantCard";
import  '../styles/search.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  const { restaurants, loading, error } = useContext(RestaurantContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);

  const handleSearchChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

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
      <div className="input-search">
      <FontAwesomeIcon icon={faMagnifyingGlass} style={{fontSize: '25px'}}/>
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
