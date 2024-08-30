import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as restaurantService from '../../services/restaurantService';
import './RestaurantForm.css';

const RestaurantForm = ({ handleAddRestaurant, handleUpdateRestaurant }) => {
  
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    description: ''
  });

  const { restaurantId } = useParams();

  useEffect(() => {
    const fetchRestaurant = async () => {
      const singleRestaurant = await restaurantService.show(restaurantId);
      setFormData(singleRestaurant);
    };
    
    if (restaurantId) {
      fetchRestaurant();
    }
  }, [restaurantId]);

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (restaurantId) {
      handleUpdateRestaurant(restaurantId, { 
        name: formData.name, 
        location: formData.location, 
        description: formData.description 
      });
    } else {
      handleAddRestaurant(formData);
    }
  };

  return (
    <main className="form-layout">
      <div className='form-container'>
        <form onSubmit={handleSubmit}>
          <h1>{restaurantId ? 'Edit Restaurant' : 'LIST NEW'}</h1>
          <label htmlFor="name-input">Name</label>
          <input
            required
            type="text"
            name="name"
            id="name-input"
            value={formData.name}
            onChange={handleChange}
          />
          <label htmlFor="location-input">Location</label>
          <textarea
            required
            name="location"
            id="location-input"
            value={formData.location}
            onChange={handleChange}
          />
          <label htmlFor="description-input">Description</label>
          <textarea
            required
            name="description"
            id="description-input"
            value={formData.description}
            onChange={handleChange}
          />
          <button type="submit">SUBMIT</button>
        </form>
      </div>
      <div className='image-container'>
        <img src="/r19.jpeg" alt="Restaurant" />
      </div>
    </main>
  );
};

export default RestaurantForm;
