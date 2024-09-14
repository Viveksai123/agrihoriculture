import React, { useState } from 'react';
import login from './img/login.jpg';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') setUsername(value);
    if (name === 'password') setPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add login validation logic here
    if (username === 'admin' && password === 'password') {
      setIsLoggedIn(true);
      navigate('/')
    } else {
      alert('Invalid credentials');
    }
  };

  if (isLoggedIn) {
    return <h2>Welcome, {username}!</h2>;
  }

  return (
    <div style={{
      backgroundImage: `url(${login})`,
      height: '100vh', // Set a height for the background image to appear
      backgroundSize: 'cover', // Ensure the background image covers the container
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <form onSubmit={handleSubmit} style={{backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '8px'}}>
        <div style={{marginBottom: "10px", color:'black'}}>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleInputChange}
          />
        </div>
        <div style={{marginBottom: "10px"}}>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
