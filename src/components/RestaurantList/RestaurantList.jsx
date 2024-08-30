


// import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import './RestaurantList.css';

// const RestaurantList = ({ restaurants }) => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const filteredRestaurants = restaurants.filter(
//     (restaurant) =>
//       restaurant.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       restaurant.owner_username?.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <main>
//       <h1>Restaurant List</h1>
//       <div className="search-bar-container">
//         <input
//           type="text"
//           placeholder="Search restaurants..."
//           value={searchTerm}
//           onChange={handleSearchChange}
//           className="search-bar"
//         />
//       </div>
//       <div className="listing-grid">
//         {filteredRestaurants.map((restaurant) => (
//           <article key={restaurant.id} className="listing-card">
//             <Link to={`/restaurants/${restaurant.id}`}>
//               <header>
//                 <h2>{restaurant.name}</h2>
//               </header>
//             </Link>
//             <footer>
//               <p>By {restaurant.owner.username}</p>
//               <p>{restaurant.text}</p>
//             </footer>
//           </article>
//         ))}
//       </div>
//     </main>
//   );
// };

// export default RestaurantList;


// import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import "./RestaurantList.css";

// const RestaurantList = ({ restaurants }) => {
//     const [searchTerm, setSearchTerm] = useState('');
//     const handleSearchChange = (event) => {
//         setSearchTerm(event.target.value);
//     };
//     const filteredRestaurants = restaurants.filter(restaurant =>
//         restaurant.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         restaurant.owner_username?.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     return (
//         <main className="restaurant-list-wrapper">
//             <div className="content-section">
//                 <h1>Restaurant List</h1>
//                 <input
//                     type='text'
//                     placeholder='Search restaurants...'
//                     value={searchTerm}
//                     onChange={handleSearchChange}
//                     className='search-bar'
//                 />
//                 <div className="image-grid">
//                     {filteredRestaurants.map(restaurant => (
//                         <article key={restaurant.id}>
//                             <Link to={`/restaurants/${restaurant.id}`}>
//                                 <div className='image-container'>
//                                     <img src={restaurant.image} alt={restaurant.name} />
//                                 </div>
//                             </Link>
//                             <header>
//                                 <h2>{restaurant.name}</h2>
//                             </header>
//                             <footer>
//                                 <p>By {restaurant.owner.username}</p>
//                                 <p>{restaurant.text}</p>
//                             </footer>
//                         </article>
//                     ))}
//                 </div>
//             </div>
//             <aside className="right-side-images">
//                 <div className="image-box">
//                     <img src="/r30.jpeg" alt="Image 1" />
//                 </div>
//                 <div className="image-box">
//                     <img src="/r1.jpeg" alt="Image 2" />
//                 </div>
//             </aside>
//         </main>
//     );
// };

// export default RestaurantList;
// import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import "./RestaurantList.css";

// const RestaurantList = ({ restaurants }) => {
//     const [searchTerm, setSearchTerm] = useState('');

//     const handleSearchChange = (event) => {
//         setSearchTerm(event.target.value);
//     };

//     const filteredRestaurants = restaurants.filter(restaurant =>
//         restaurant.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         restaurant.owner.username?.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     return (
//         <main className="restaurant-list-wrapper">
//             <div className="left-side">
//                 <h1>Restaurant List</h1>
//                 <input
//                     type='text'
//                     placeholder='Search restaurants...'
//                     value={searchTerm}
//                     onChange={handleSearchChange}
//                     className='search-bar'
//                 />
//                 <div className="listing-grid">
//                     {filteredRestaurants.map(restaurant => (
//                         <article key={restaurant.id} className="listing-card">
//                             <Link to={`/restaurants/${restaurant.id}`}>
//                                 <div className='image-container'>
//                                     <img src="/r14.jpeg" alt="plates" />
//                                 </div>
//                             </Link>
//                             <header>
//                                 <h2>{restaurant.name}</h2>
//                             </header>
//                             <footer>
//                                 <p>{restaurant.location}</p>
//                                 <p>By {restaurant.owner.username}</p>
//                             </footer>
//                         </article>
//                     ))}
//                 </div>
//             </div>
//             <aside className="right-side">
//                 <div className="image-box">
//                     <img src="/r30.jpeg" alt="Image 1" />
//                 </div>
//                 <div className="image-box">
//                     <img src="/r1.jpeg" alt="london restau" />
//                 </div>
//                 <div className="image-box">
//                     <img src="/r10.jpeg" alt="london restau" />
//                 </div>
//                 <div className="image-box">
//                     <img src="/r11.jpeg" alt="london restau" />
//                 </div>
//             </aside>
//         </main>
//     );
// };

// export default RestaurantList;

import { Link } from 'react-router-dom';
import { useState } from 'react';
import "./RestaurantList.css";

const RestaurantList = ({ restaurants }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredRestaurants = restaurants.filter(restaurant =>
        restaurant.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        restaurant.owner.username?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <main className="restaurant-list-wrapper">
            <div className="left-side">
                <h1>Dinner in London?</h1>
                <input
                    type='text'
                    placeholder='Search restaurants...'
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className='search-bar'
                />
                <div className="listing-grid">
                    {filteredRestaurants.map(restaurant => (
                        <Link to={`/restaurants/${restaurant.id}`} key={restaurant.id} className="listing-link">
                            <article className="listing-card">
                                <div className='image-container'>
                                    <img src="/r14.jpeg" alt="plates" />
                                </div>
                                <div className="text-container">
                                    <header>
                                        <h2>{restaurant.name}</h2>
                                    </header>
                                    <footer className="listing-footer">
                                        <p>{restaurant.location}</p>
                                        <p>{restaurant.owner?.username ? `By ${restaurant.owner.username}` : ''}</p>
                                    </footer>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </div>
            <aside className="right-side">
                <div className="image-box">
                    <img src="/r30.jpeg" alt="Image 1" />
                </div>
                <div className="image-box">
                    <img src="/r1.jpeg" alt="london restau" />
                </div>
                <div className="image-box">
                    <img src="/r10.jpeg" alt="london restau" />
                </div>
                <div className="image-box">
                    <img src="/r11.jpeg" alt="london restau" />
                </div>
            </aside>
        </main>
    );
};

export default RestaurantList;
