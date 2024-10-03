import { useContext, useState } from 'react';
import { AuthedUserContext } from '../../App';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = ({ handleSignout }) => {
  const user = useContext(AuthedUserContext); // Using user from context
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

  return (
    <nav className='navbar-custom'>
      <div className='navbar-left'>
        <span className='icon'>🌍 EN ⌄</span>
        <button
          className={`theme-toggle-button ${isDarkMode ? 'dark-mode-active' : 'light-mode-active'}`}
          onClick={toggleDarkMode}
        >
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
      <div className='navbar-center'>
        <div className='logo-container'>
          <span className='logo'>LDN EATERYGUIDE</span>
        </div>
        <ul className='navbar-links'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/restaurants/">To The Restaurants!</Link></li>
          <li><Link to="/restaurants/new/">List New</Link></li>
        </ul>
      </div>
      <div className='navbar-right'>
        <ul>
          {user ? (
            <li><Link to="" onClick={handleSignout}>Sign Out</Link></li>
          ) : (
            <>
              <li><Link to="/signin">Sign In</Link></li>
              <li><Link to="/signup">Sign Up</Link></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
