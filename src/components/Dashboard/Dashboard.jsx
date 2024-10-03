// import { useContext, useEffect } from 'react';
// import { AuthedUserContext } from '../../App';
// import './Dashboard.css';
// import Carousel from '../Carousel/carousel.jsx';

// const imageData = [
//   { src: '/r17.jpeg', alt: 'Delicious Dish' },
//   { src: '/r16.jpeg', alt: 'Delicious Dish' },
//   { src: '/r15.jpeg', alt: 'Delicious Dish' },
//   { src: '/r2.jpeg', alt: 'Another Dish' },
//   { src: '/r3.jpeg', alt: 'Another Dish' },
//   { src: '/r4.jpeg', alt: 'Another Dish' },
//   { src: '/r5.jpeg', alt: 'Another Dish' },
//   { src: '/r6.jpeg', alt: 'Another Dish' },
//   { src: '/r7.jpeg', alt: 'Another Dish' },
//   { src: '/r12.jpeg', alt: 'London Restaurant' },
//   { src: '/r1.jpeg', alt: 'London Restaurant' },
//   { src: '/r19.jpeg', alt: 'London Restaurant' }
// ];

// const Dashboard = () => {
//   const { user } = useContext(AuthedUserContext);


//   useEffect(() => {
//     document.body.classList.toggle('dark-mode', false); 
//   }, []);

//   return (
//     <main className="content-wrapper">
//       <div className="header-container">
//         <div className="box-container">
//           <div className="description-box">
//             <h2>Discover the Culinary Wonders of London</h2>
//             <p>Welcome, {user?.name || 'Guest'}!</p>
//             <p>
//               London’s dining scene is a vibrant journey through a world of flavors and cultures. 
//               From the lively streets of Soho to the charming lanes of Covent Garden, each 
//               restaurant offers a unique taste of the city’s rich cultural tapestry. Imagine 
//               strolling through bustling markets, savoring street food from every corner of 
//               the globe, or enjoying a cozy meal in a family-run trattoria where every dish 
//               tells a story.
//             </p>
//             <p>
//               Whether you’re indulging in Michelin-starred cuisine or exploring hidden culinary 
//               gems, London’s restaurants cater to every palate. Each venue, from chic bistros 
//               to lively gastropubs, provides a distinctive slice of London’s diverse food scene. 
//               Dive into this gastronomic adventure and let London Eats guide you through the 
//               city’s best dining experiences.
//             </p>
//           </div>
//           <div className="carousel-box">
//             <Carousel data={imageData} /> 
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Dashboard;


import { useContext, useEffect } from 'react';
import { AuthedUserContext } from '../../App';
import './Dashboard.css';
import Carousel from '../Carousel/carousel.jsx';

const imageData = [
  { src: '/r17.jpeg', alt: 'Delicious Dish' },
  { src: '/r16.jpeg', alt: 'Delicious Dish' },
  { src: '/r15.jpeg', alt: 'Delicious Dish' },
  { src: '/r2.jpeg', alt: 'Another Dish' },
  { src: '/r3.jpeg', alt: 'Another Dish' },
  { src: '/r4.jpeg', alt: 'Another Dish' },
  { src: '/r5.jpeg', alt: 'Another Dish' },
  { src: '/r6.jpeg', alt: 'Another Dish' },
  { src: '/r7.jpeg', alt: 'Another Dish' },
  { src: '/r12.jpeg', alt: 'London Restaurant' },
  { src: '/r1.jpeg', alt: 'London Restaurant' },
  { src: '/r19.jpeg', alt: 'London Restaurant' }
];

const Dashboard = () => {
  const { user } = useContext(AuthedUserContext);

  useEffect(() => {
    const fetchRestaurants = async () => {
      if (!user || !user.token) {
        console.error('User is not authenticated or token is missing.');
        return;
      }

      try {
        const response = await fetch('/restaurants/', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${user.token}`, // Ensure token is passed here
          },
        });

        if (!response.ok) {
          if (response.status === 401) {
            console.error('Unauthorized access - please log in.');
          } else {
            console.error('Failed to fetch restaurants:', response.statusText);
          }
          return;
        }

        const data = await response.json();
        console.log('Restaurants data:', data); 
      } catch (err) {
        console.error('Error fetching restaurants:', err);
      }
    };

    fetchRestaurants();
  }, [user]);

  return (
    <main className="content-wrapper">
      <div className="header-container">
        <div className="box-container">
          <div className="description-box">
            <h2>Discover the Culinary Wonders of London</h2>
            <p>Welcome, {user?.name || 'Guest'}!</p>
            <p>
              London’s dining scene is a vibrant journey through a world of flavors and cultures. 
              From the lively streets of Soho to the charming lanes of Covent Garden, each 
              restaurant offers a unique taste of the city’s rich cultural tapestry. Imagine 
              strolling through bustling markets, savoring street food from every corner of 
              the globe, or enjoying a cozy meal in a family-run trattoria where every dish 
              tells a story.
            </p>
            <p>
              Whether you’re indulging in Michelin-starred cuisine or exploring hidden culinary 
              gems, London’s restaurants cater to every palate. Each venue, from chic bistros 
              to lively gastropubs, provides a distinctive slice of London’s diverse food scene. 
              Dive into this gastronomic adventure and let London Eats guide you through the 
              city’s best dining experiences.
            </p>
          </div>
          <div className="carousel-box">
            <Carousel data={imageData} /> 
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;

