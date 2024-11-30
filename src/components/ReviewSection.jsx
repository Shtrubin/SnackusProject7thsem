import React, { useState, useEffect } from 'react';

function ReviewSection({ restaurantId }) {
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([]);

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
        setReviews([...reviews, { review_text: review, username: data.username ? data.username : 'you' }]);
        setReview("");
      } else {
        alert(data.error || 'Error submitting review');
      }
    } catch (error) {
      console.error(error);
      alert('Error during review submission');
    }
  };

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(`http://localhost:5000/reviews/${restaurantId}`);
        const data = await response.json();

        if (response.ok) {
          setReviews(data);
        } else {
          alert(data.message || 'Error fetching reviews');
        }
      } catch (error) {
        console.error(error);
        alert('Error fetching reviews');
      }
    };

    fetchReviews();
  }, [restaurantId]);

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
              <p><strong>{rev.username}</strong>: {rev.review_text}</p>
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
