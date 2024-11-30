import React, { useState } from 'react';

function ReviewSection({ restaurantId }) {
  const [review, setReview] = useState("");  // To store the review input
  const [reviews, setReviews] = useState([]); // To store reviews (static for now)

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleReviewSubmit = async (event) => {
    event.preventDefault();

    if (!review.trim()) {
      alert("Please write a review.");
      return;
    }

    // Retrieve the user_id from localStorage
    const userId = localStorage.getItem("userId");

    if (!userId) {
      alert("You must be logged in to submit a review.");
      return;
    }

    // Make the POST request to the backend to submit the review
    try {
      const response = await fetch('http://localhost:5000/submit_review', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          review_text: review,
          user_id: userId,  // Pass the user ID from localStorage
          restaurant_id: restaurantId,  // Pass the restaurant ID
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Review submitted successfully!');
        setReviews([...reviews, review]);  // Update local state with new review
        setReview("");  // Clear the input field
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
      <h3>Write a Review</h3>
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

      <div className="reviews-display">
        <h4>Reviews</h4>
        {reviews.length > 0 ? (
          reviews.map((rev, index) => (
            <div key={index} className="review-item">
              <p>{rev}</p>
            </div>
          ))
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>
    </div>
  );
}

export default ReviewSection;
