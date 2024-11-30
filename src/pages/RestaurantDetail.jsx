import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import '../styles/restaurantDetail.css';
import RestaurantContext from "../context/RestaurantContext";
import RestaurantCard from "../components/RestaurantCard";

function RestaurantDetail() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { restaurants } = useContext(RestaurantContext); 

  useEffect(() => {
    fetch(`http://localhost:5000/restaurant/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch restaurant details');
        }
        return response.json();
      })
      .then(data => {
        setRestaurant(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="restaurant-detail-container">
      <div className="left-part">
        <h2 className="restaurant-title">{restaurant.title}</h2>
        <img className="landscape-image" src={restaurant.photo_url} alt={restaurant.restaurant_name} />

        <div className="post-detail"> 
        <p className="rating">Rating: {restaurant.rating}/10</p>

        <p>{restaurant.description}</p>


        <div className="details-section">
          <h3>Detail</h3>
          <p><strong>Restaurant Name:</strong> {restaurant.restaurant_name}</p>
          <p><strong>Location:</strong> {restaurant.location}</p>
          <p><strong>Rating:</strong> {restaurant.rating}/10</p>
          <p><strong>Special Item:</strong> {restaurant.special_item}</p>
        </div>

        <div className="recommendation-section">
          <h3>Our Recommendation</h3>
          <p>{restaurant.recommendation}</p>
        </div>

        <div className="menu-download-section">
          <h3>Download Menu</h3>
          <a href={restaurant.menu_photo_url} download>
            <button className="download-button">MENU HERE</button>
          </a>
        </div>

        </div>

        
      </div>
      <div className="right-part">
        <div className="dummy-image">
          <img src="https://picsum.photos/200/300" alt="Dummy 1" />
        </div>
        <div className="dummy-image">
          <img src="https://picsum.photos/200/300" alt="Dummy 2" />
        </div>
      </div>

      
      
    </div>
  );
}

export default RestaurantDetail;
