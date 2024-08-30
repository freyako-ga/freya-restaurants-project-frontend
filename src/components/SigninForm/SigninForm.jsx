// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import * as authService from '../../services/authService';
// const SigninForm = (props) => {
//   const navigate = useNavigate(); // added this for navigation purposes
//   const [message, setMessage] = useState(['']);
//   const [formData, setFormData] = useState({
//     username: '',
//     password: '',
//   });
//   const updateMessage = (msg) => {
//     setMessage(msg);
//   };
//   const handleChange = (e) => {
//     updateMessage('');
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const user = await authService.signin(formData);
//       console.log('Logged in user:', user)
//       props.setUser(user);
//       navigate('/');
//     } catch (error) {
//       updateMessage(error.message);
//     }
//   };
//   return (
//     <main>
//       <h1>Log In</h1>
//       <p>{message}</p>
//       <form autoComplete="off" onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="email">Username:</label>
//           <input
//             type="text"
//             autoComplete="off"
//             id="username"
//             value={formData.username}
//             name="username"
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             autoComplete="off"
//             id="password"
//             value={formData.password}
//             name="password"
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <button>Log In</button>
//           <Link to="/">
//             <button>Cancel</button>
//           </Link>
//         </div>
//       </form>
//     </main>
//   );
// };
// export default SigninForm;



import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as authService from '../../services/authService';

const SigninForm = (props) => {
  const navigate = useNavigate(); // Added this for navigation purposes
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const updateMessage = (msg) => {
    setMessage(msg);
  };

  const handleChange = (e) => {
    updateMessage('');
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await authService.signin(formData);
      console.log('Logged in user:', user);
      props.setUser(user);
      navigate('/');
    } catch {
      // Display an error message if login fails
      updateMessage('Error: wrong details input');
    }
  };

  return (
    <main>
      <h1>Log In</h1>
      {message && <p style={{ color: 'red' }}>{message}</p>}
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            autoComplete="off"
            id="username"
            value={formData.username}
            name="username"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            autoComplete="off"
            id="password"
            value={formData.password}
            name="password"
            onChange={handleChange}
          />
        </div>
        <div>
          <button>Log In</button>
          <Link to="/">
            <button type="button">Cancel</button>
          </Link>
        </div>
      </form>
    </main>
  );
};

export default SigninForm;
