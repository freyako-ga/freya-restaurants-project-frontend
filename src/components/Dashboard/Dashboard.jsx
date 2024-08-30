import { useContext, useState, useEffect } from 'react';
import { AuthedUserContext } from '../../App';
import './Dashboard.css';
import Carousel from '../Carousel/carousel.jsx';

const imageData = [
  { src: '/r17.jpeg', alt: 'Delicious Dish'},
  { src: '/r16.jpeg', alt: 'Delicious Dish'},
  { src: '/r15.jpeg', alt: 'Delicious Dish'},
  { src: '/r2.jpeg', alt: 'Another Dish' },
  { src: '/r3.jpeg', alt: 'Another Dish' },
  { src: '/r4.jpeg', alt: 'Another Dish' },
  { src: '/r5.jpeg', alt: 'Another Dish' },
  { src: '/r6.jpeg', alt: 'Another Dish' },
  { src: '/r7.jpeg', alt: 'Another Dish' },
  { src: '/r12.jpeg', alt: 'london restau' },
  { src: '/r1.jpeg', alt: 'london restau' },
  { src: '/r19.jpeg', alt: 'london restau' }
];

const Dashboard = () => {
  const user = useContext(AuthedUserContext);
  const [isDarkMode, setIsDarkMode] = useState(false);
      // Toggle theme function
      const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    // Apply dark mode class to body
    useEffect(() => {
        document.body.classList.toggle('dark-mode', isDarkMode);
    }, [isDarkMode]);


  return (
    <main className="content-wrapper">
        <div className="header-container">
           <h1>Welcome, {user.username}, to your film photo dashboard</h1>
           <button onClick={toggleTheme} className="theme-toggle-button">
                        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                    </button>
                    </div>
      <div className="box-container">
        <div className="description-box">
          <h2>Discover the Culinary Wonders of London</h2>
          <p>
            Welcome, {user?.name || 'Guest'}! 
          </p>
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
    </main>
  );
};

export default Dashboard;
