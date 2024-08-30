
import { createContext, useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';
import SignupForm from './components/SignupForm/SignupForm';
import SigninForm from './components/SigninForm/SigninForm';
import * as authService from './services/authService';
import RestaurantList from './components/RestaurantList/RestaurantList';
import * as restaurantService from './services/restaurantService';
import RestaurantDetails from './components/RestaurantDetails/RestaurantDetails';
import RestaurantForm from './components/RestaurantForm/RestaurantForm'; 
import ReviewForm from './components/ReviewForm/ReviewForm'; 



export const AuthedUserContext = createContext(null)

const App = () => {
  const [user, setUser] = useState(authService.getUser());
  console.log(user)
  const [restaurants, setRestaurants] = useState([]);

//Location variables
  const navigate = useNavigate();
  const handleSignout = () => {
    authService.signout();
    setUser(null);
  };

  const fetchAllRestaurants = async () =>{
    const allRestaurants = await restaurantService.index()
    setRestaurants(allRestaurants) 
    }

  useEffect(() => {
    if (user) {
      fetchAllRestaurants();
    }
  }, [user]);

  const handleAddRestaurant = async (restaurantFormData) => {
    const newRestaurant = await restaurantService.create(restaurantFormData);
    setRestaurants([newRestaurant, ...restaurants]);
    navigate('/restaurants');
  };

  const handleUpdateRestaurant = async (restaurantId, formData) => {
    const updatedRestaurant = await restaurantService.update(restaurantId, formData)
    console.log(updatedRestaurant)
    navigate(`/restaurants/${restaurantId}`);
  };
  
  
  const handleDeleteRestaurant = async (restaurantId) => {
    const deletedRestaurant = await restaurantService.deleteRestaurant(restaurantId)
    console.log(deletedRestaurant)
    await fetchAllRestaurants()
    navigate('/restaurants')
  };

  const handleAddReview = async (restaurantId, reviewFormData) => {
    try {
      // Call the API to create a new review
      const newReview = await restaurantService.createReview(restaurantId, reviewFormData);
      
      // Update the restaurant's reviews list with the new review
      setRestaurants((prevRestaurants) => 
        prevRestaurants.map((restaurant) =>
          restaurant.id === restaurantId
            ? { ...restaurant, reviews: [...restaurant.reviews, newReview] }
            : restaurant
        )
      );
  
      // Navigate back to the restaurant details page
      navigate(`/restaurants/${restaurantId}`);
    } catch (error) {
      console.error('Error adding review:', error);
    }
  };
  


  // const handleUpdateReview = async (restaurantId, reviewId, updatedFormData) => {
  //   try {
  //     // Call the API to update the review
  //     const updatedReview = await restaurantService.updateReview(restaurantId, reviewId, updatedFormData);
  
  //     // Update the restaurant's reviews list with the updated review
  //     setRestaurants((prevRestaurants) => 
  //       prevRestaurants.map((restaurant) =>
  //         restaurant.id === restaurantId
  //           ? {
  //               ...restaurant,
  //               reviews: restaurant.reviews.map((review) =>
  //                 review.id === reviewId ? updatedReview : review
  //               ),
  //             }
  //           : restaurant
  //       )
  //     );
  
  //     // Navigate back to the restaurant details page
  //     navigate(`/restaurants/${restaurantId}`);
  //   } catch (error) {
  //     console.error('Error updating review:', error);
  //   }
  // };
  



  return (
    <AuthedUserContext.Provider value={user}>


      <NavBar user={user} handleSignout={handleSignout} />
      <Routes>
        {user ? 
          <>
            <Route path="/" element={<Dashboard user={user} />} />
            <Route path="/restaurants" element={<RestaurantList restaurants={restaurants} />} />
            <Route path="/restaurants/:restaurantId" element={<RestaurantDetails handleDeleteRestaurant={handleDeleteRestaurant} />} />
            <Route path="/restaurants/new" element={<RestaurantForm handleAddRestaurant={handleAddRestaurant} />} />
            <Route path="/restaurants/:restaurantId/edit" element={<RestaurantForm handleUpdateRestaurant={handleUpdateRestaurant} />} />
            <Route path="/restaurants/:restaurantId/reviews/:reviewId/edit" element={<ReviewForm handleAddReview={handleAddReview} />} />

          </>
         : 
          <>
              <Route path="/restaurants" element={<RestaurantList />} />
              </>
  }
            <Route path="/" element={<Landing />} />
            <Route path="/signup" element={<SignupForm setUser={setUser} />} />
            <Route path="/signin" element={<SigninForm setUser={setUser} />} />
      </Routes>
    </AuthedUserContext.Provider>
  );
};

export default App;

