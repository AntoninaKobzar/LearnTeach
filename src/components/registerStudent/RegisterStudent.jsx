import React, { useState } from 'react';
import authService from '../../services/authService'

const RegisterStudent = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    // Add other fields as needed for registration
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authService.register(formData)
      .then(userData => {
        // Handle successful registration, e.g., show success message or redirect
        console.log('User registered:', userData);
      })
      .catch(error => {
        // Handle registration error
        console.error('Registration failed:', error);
      });
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        {/* Add other fields as needed for registration */}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterStudent;