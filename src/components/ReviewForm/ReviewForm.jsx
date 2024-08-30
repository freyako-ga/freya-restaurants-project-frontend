
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import * as restaurantService from '../../services/restaurantService';

const ReviewForm = ({ handleAddReview, handleUpdateReview }) => {
  const [formData, setFormData] = useState({ text: '', restaurant: '' });
  const { restaurantId, reviewId } = useParams(); 
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchReview = async () => {
      if (reviewId) {
        try {
          const restaurantData = await restaurantService.show(restaurantId);
          const review = restaurantData.reviews.find((review) => review.id === parseInt(reviewId));
          if (review) {
            setFormData({ text: review.text, restaurant: review.restaurant });
          }
        } catch (error) {
          console.error('Error fetching review:', error);
        }
      }
      if (restaurantId) {
        setFormData({text: '', restaurant: restaurantId})
      }
    };

    fetchReview();
  }, [restaurantId, reviewId]);

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      if (reviewId) {
        await handleUpdateReview(restaurantId, reviewId, formData); 
      } else {
        await handleAddReview(formData); 
      }
      navigate(`/restaurants/${restaurantId}`); 
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  return (
    <main>
      <h2>{reviewId ? 'Update Review' : 'Create Review'}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="text-input">Your review:</label>
        <textarea
          required
          name="text"
          id="text-input"
          value={formData.text}
          onChange={handleChange}
        />
        <button type="submit">{reviewId ? 'Update' : 'Submit'}</button>
      </form>
    </main>
  );
};

export default ReviewForm;
