// import { Link } from 'react-router-dom';
// import './NavBar.css'

// const NavBar = ({ user, handleSignout }) => {
//   return (
//     <>
//       { user ? (
//         <nav>
//            <nav className='navbar-custom'>
//            <span className='logo'>Ldn EateryGuide</span>
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to='/restaurants'>To The Restaurants!</Link></li>
//             <li><Link to="" onClick={handleSignout}>Sign Out</Link></li>
//             <li><Link to="/restaurants/new">Add New Restaurants</Link></li>
//           </ul>
//         </nav>
//       ) : (
//         <nav>
//           <ul>
//             <li><Link to="/signin">Sign In</Link></li>
//             <li><Link to="/signup">Sign Up</Link></li>
//           </ul>
//         </nav>
//       )}
//     </>
//   )}

// export default NavBar

// import { useContext } from 'react';
// import { AuthedUserContext } from '../../App';
// import { Link } from 'react-router-dom';
// import './NavBar.css';

// const NavBar = ({ handleSignout }) => {
//   const user = useContext(AuthedUserContext);

//   return (
//     <>
//       {user ? (
//         <nav className='navbar-custom'>
//           <span className='logo'>Ldn EateryGuide</span>
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/restaurants/">To The Restaurants!</Link></li>
//             <li><Link to="/restaurants/new/">Add New Restaurants</Link></li>
//             <li><Link to="" onClick={handleSignout}>Sign Out</Link></li>
//           </ul>
//         </nav>
//       ) : (
//         <nav>
//           <ul>
//             <li><Link to="/signin">Sign In</Link></li>
//             <li><Link to="/signup">Sign Up</Link></li>
//             <li><Link to="/">Home</Link></li>
//           </ul>
//         </nav>
//       )}
//     </>
//   );
// };

// export default NavBar;


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
        <button className="theme-toggle-button" onClick={toggleDarkMode}>
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
