import React, { useState } from 'react';
import '../styles/review.css';
import { useNavigate } from 'react-router-dom';

function ReviewSection({ restaurantId, reviews, handleSetReview }) {
  const [review, setReview] = useState("");
  const navigate= useNavigate();

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleReviewSubmit = async (event) => {
    event.preventDefault();

    if (!review.trim()) {
      alert("Please write a review.");
      return;
    }

    const userId = localStorage.getItem("userId");

    if (!userId) {
      alert("You must be logged in to submit a review.");
      navigate('/login')
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/submit_review', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          review_text: review,
          user_id: userId,
          restaurant_id: restaurantId,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        handleSetReview(review);  
        setReview("");  
      } else {
        alert(data.error || 'Error submitting review');
      }
    } catch (error) {
      console.error(error);
      alert('Error during review submission');
    }
  };

  return (
    <div className="review-section">
      <div className="reviews-display">
        <h3>Reviews</h3>
        {reviews.length > 0 ? (
          reviews.map((rev, index) => (
            <div key={index} className="review-item">
              <p><strong>{rev.username}</strong>: {rev.review_text}</p>
            </div>
          ))
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>
      <form onSubmit={handleReviewSubmit}>
        <textarea
          value={review}
          onChange={handleReviewChange}
          placeholder="Write your review here..."
          rows="4"
          cols="50"
        />
        <button type="submit" className="submit-review-btn">Submit Review</button>
      </form>
    </div>
  );
}

export default ReviewSection;
