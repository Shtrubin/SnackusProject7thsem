import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import '../styles/restaurantDetail.css'

function RestaurantDetail() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        <img src={restaurant.photo_url} alt={restaurant.restaurant_name} />
        <h2>{restaurant.restaurant_name}</h2>
        <p>{restaurant.description}</p>
        <p><strong>Special Item:</strong> {restaurant.special_item}</p>
        <p><strong>Location:</strong> {restaurant.location}</p>
        <p><strong>Sub-location:</strong> {restaurant.sub_location}</p>
        <p><strong>Recommendation:</strong> {restaurant.recommendation}</p>
        <p><strong>Rating:</strong> {restaurant.rating}</p>
        <img src={restaurant.menu_photo_url} alt="Menu" />
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
