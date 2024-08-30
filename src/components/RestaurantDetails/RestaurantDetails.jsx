
// import { Link, useParams } from 'react-router-dom';
// import { useState, useEffect, useContext } from 'react';
// import * as restaurantService from '../../services/restaurantService';
// import ReviewForm from '../ReviewForm/ReviewForm';
// import { AuthedUserContext } from '../../App';
// import './RestaurantDetails.css';

// const RestaurantDetails = ({ handleDeleteRestaurant }) => {
//     const user = useContext(AuthedUserContext);
//     const [restaurant, setRestaurant] = useState(null);
//     const { restaurantId } = useParams();

//     useEffect(() => {
//         const fetchRestaurant = async () => {
//             try {
//                 const restaurantData = await restaurantService.show(restaurantId);
//                 console.log('singleRestaurant', restaurantData);
//                 setRestaurant(restaurantData);
//             } catch (error) {
//                 console.error('Error fetching restaurant:', error);
//             }
//         };

//         fetchRestaurant();
//     }, [restaurantId]);

//     if (!restaurant) return <main>Loading...</main>;

//     const handleAddReview = async (formData) => {
//         try {
//             const newReview = await restaurantService.createReview(formData);
//             setRestaurant(prevRestaurant => ({
//                 ...prevRestaurant,
//                 reviews: [...prevRestaurant.reviews, newReview]
//             }));
//         } catch (error) {
//             console.error('Error adding review:', error);
//         }
//     };

//     const handleDeleteReview = async (reviewId) => {
//         try {
//             await restaurantService.deleteReview(reviewId);
//             setRestaurant(prevRestaurant => ({
//                 ...prevRestaurant,
//                 reviews: prevRestaurant.reviews.filter(review => review.id !== reviewId)
//             }));
//         } catch (error) {
//             console.error('Error deleting review:', error);
//         }
//     };

//     // const handleUpdateReview = async (reviewId) => {
//     //     try {
//     //         await restaurantService.updateReview(reviewId);
//     //         setRestaurant(prevRestaurant => ({
//     //             ...prevRestaurant,
//     //             reviews: prevRestaurant.reviews.filter(review => review.id !== reviewId)
//     //         }));
//     //     } catch (error) {
//     //         console.error('Error updating review:', error);
//     //     }
//     // };

// // (reviewId) NO RESTURANTID
// //     /reviews/id
// //     make sure body contains the restaurant before and its populated 

//     return (
//         <main className="container">
//             <div className="restaurant-details">
//                 <img src={restaurant.image} alt={restaurant.name} />
//                 <div className="restaurant-meta">
//                     <h1>{restaurant.name.toUpperCase()}</h1>
//                     <p>
//                         Posted by <strong>{restaurant.owner?.username || 'Unknown'}</strong>
//                     </p>
//                     <p>{restaurant.description}</p>
//                     {restaurant.owner?.id === user.id && (
//                         <div className="actions">
//                             <section>
//                             <Link to={`/restaurants/${restaurantId}/edit`} className="btn btn-primary">
//                                 Edit
//                             </Link>
//                             <button
//                                 className="btn btn-danger"
//                                 onClick={() => handleDeleteRestaurant(restaurantId)}
//                             >
//                                 Delete Restaurant
//                             </button>
//                             </section>
//                         </div>
//                     )}
//                 </div>
//             </div>
//             <section className="review-section">
//                 <ReviewForm handleAddReview={handleAddReview} restaurantId={restaurantId}/>
//                 {(!restaurant.reviews || restaurant.reviews.length === 0) && <p>There are no reviews.</p>}
//                 <ul className="reviews-list">
//                     {restaurant.reviews?.map(review => (
//                         <li key={review.id}> 
//                             <header>
//                                 <p>
//                                     {review.owner?.username || 'Anonymous'}
//                                 </p>
//                             </header>
//                             <p>{review.text}</p>
//                             {review.owner?.id === user.id && (
//                                 <div className="actions">
//                                     {/* <Link
//                                         to={`/restaurants/${restaurantId}/reviews/${review.id}/edit`}
//                                         className="btn btn-secondary"
//                                     >
//                                         Edit Review
//                                     </Link> */}
//                                     <button
//                                         className="btn btn-danger"
//                                         onClick={() => handleDeleteReview(review.id)}
//                                     >
//                                         Delete Review
//                                     </button>
//                                 </div>
//                             )}
//                         </li>
//                     ))}
//                 </ul>
//             </section>
//         </main>
//     );
// };

// export default RestaurantDetails;


import { Link, useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import * as restaurantService from '../../services/restaurantService';
import ReviewForm from '../ReviewForm/ReviewForm';
import { AuthedUserContext } from '../../App';
import './RestaurantDetails.css';

const RestaurantDetails = ({ handleDeleteRestaurant }) => {
    const user = useContext(AuthedUserContext);
    const [restaurant, setRestaurant] = useState(null);
    const { restaurantId } = useParams();

    useEffect(() => {
        const fetchRestaurant = async () => {
            try {
                const restaurantData = await restaurantService.show(restaurantId);
                setRestaurant(restaurantData);
            } catch (error) {
                console.error('Error fetching restaurant:', error);
            }
        };

        fetchRestaurant();
    }, [restaurantId]);

    if (!restaurant) return <main>Loading...</main>;

    const handleAddReview = async (formData) => {
        try {
            const newReview = await restaurantService.createReview(formData);
            setRestaurant(prevRestaurant => ({
                ...prevRestaurant,
                reviews: [...prevRestaurant.reviews, newReview]
            }));
        } catch (error) {
            console.error('Error adding review:', error);
        }
    };

    const handleDeleteReview = async (reviewId) => {
        try {
            await restaurantService.deleteReview(reviewId);
            setRestaurant(prevRestaurant => ({
                ...prevRestaurant,
                reviews: prevRestaurant.reviews.filter(review => review.id !== reviewId)
            }));
        } catch (error) {
            console.error('Error deleting review:', error);
        }
    };

    return (
        <main className="container">
            <div className="main-content">
                <div className="left-box">
                    <div className="restaurant-details">
                        <img src={restaurant.image} alt={restaurant.name} />
                        <div className="restaurant-meta">
                            <h1>{restaurant.name.toUpperCase()}</h1>
                            <p>
                                Posted by <strong>{restaurant.owner?.username || 'Unknown'}</strong>
                            </p>
                            <p>{restaurant.description}</p>
                            {restaurant.owner?.id === user.id && (
                                <div className="actions">
                                    <Link to={`/restaurants/${restaurantId}/edit`} className="btn btn-primary">
                                        Edit
                                    </Link>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => handleDeleteRestaurant(restaurantId)}
                                    >
                                        Delete Restaurant
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="right-box">
                    <section className="review-section">
                        <h2>Create Review</h2>
                        <ReviewForm handleAddReview={handleAddReview} restaurantId={restaurantId}/>
                        {(!restaurant.reviews || restaurant.reviews.length === 0) && <p>There are no reviews.</p>}
                        <ul className="reviews-list">
                            {restaurant.reviews?.map(review => (
                                <li key={review.id}>
                                    <header>
                                        <p>{review.owner?.username || 'Anonymous'}</p>
                                    </header>
                                    <p>{review.text}</p>
                                    {review.owner?.id === user.id && (
                                        <div className="actions">
                                            <button
                                                className="btn btn-danger"
                                                onClick={() => handleDeleteReview(review.id)}
                                            >
                                                Delete Review
                                            </button>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>
            </div>
        </main>
    );
};

export default RestaurantDetails;
