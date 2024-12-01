import React, { useState } from "react";
import '../styles/create.css'

function CreatePost() {
  const [formData, setFormData] = useState({
    title: "",
    restaurant_name: "",
    rating: "",
    location: "",
    sub_location: "",
    special_item: "",
    description: "",
    recommendation: "",
    category: "local", 
  });

  const [restaurantPhoto, setRestaurantPhoto] = useState(null);
  const [menuPhoto, setMenuPhoto] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const { name, files } = e.target;
    if (name === "restaurant_photo") {
      setRestaurantPhoto(files[0]);
    } else if (name === "menu_photo") {
      setMenuPhoto(files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();

    form.append("title", formData.title);
    form.append("restaurant_name", formData.restaurant_name);
    form.append("rating", formData.rating);
    form.append("location", formData.location);
    form.append("sub_location", formData.sub_location);
    form.append("special_item", formData.special_item);
    form.append("description", formData.description);
    form.append("recommendation", formData.recommendation);
    form.append("category", formData.category); 

    if (restaurantPhoto) {
      form.append("restaurant_photo", restaurantPhoto);
    }

    if (menuPhoto) {
      form.append("menu_photo", menuPhoto);
    }

    try {
      const response = await fetch("http://localhost:5000/add_restaurant", {
        method: "POST",
        body: form,
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message);
      } else {
        alert("Error adding restaurant: " + result.error);
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <div>
      <h1>Add a Restaurant</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="left-part-create">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Title"
          />
          <input
            type="text"
            name="restaurant_name"
            value={formData.restaurant_name}
            onChange={handleInputChange}
            placeholder="Restaurant Name"
          />
          <input
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleInputChange}
            placeholder="Rating"
          />
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            placeholder="Location"
          />
          <input
            type="text"
            name="sub_location"
            value={formData.sub_location}
            onChange={handleInputChange}
            placeholder="Sub-location"
          />
          <input
            type="text"
            name="special_item"
            value={formData.special_item}
            onChange={handleInputChange}
            placeholder="Special Item"
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Description"
          />
          
        </div>

        <div className="right-part-create">
        <textarea
            name="recommendation"
            value={formData.recommendation}
            onChange={handleInputChange}
            placeholder="Recommendation"
          />
          
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
          >
            <option value="local">Local</option>
            <option value="mid-range">Mid-range</option>
            <option value="high-end">High-end</option>
          </select>

          <input
            type="file"
            name="restaurant_photo"
            onChange={handleImageChange}
          />
          <input
            type="file"
            name="menu_photo"
            onChange={handleImageChange}
          />

          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CreatePost;
