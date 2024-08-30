import { useState, useEffect } from 'react';
import RestaurantList from './RestaurantList';
import RestaurantForm from './RestaurantForm';
import * as restaurantService from '../../services/restaurantService';

const RestaurantPage = () => {
  const [restaurants, setRestaurants] = useState([]);

  const fetchRestaurants = async () => {
    const data = await restaurantService.getAll();
    setRestaurants(data);
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const handleAddRestaurant = async (newRestaurant) => {
    const addedRestaurant = await restaurantService.create(newRestaurant);
    setRestaurants([...restaurants, addedRestaurant]);
  };

  const handleUpdateRestaurant = async (restaurantId, updatedRestaurant) => {
    const updated = await restaurantService.update(restaurantId, updatedRestaurant);
    setRestaurants(restaurants.map(r => 
      r.id === restaurantId ? updated : r
    ));
  };

  return (
    <div>
      <RestaurantForm 
        handleAddRestaurant={handleAddRestaurant} 
        handleUpdateRestaurant={handleUpdateRestaurant} 
      />
      <RestaurantList restaurants={restaurants} />
    </div>
  );
};

export default RestaurantPage;
