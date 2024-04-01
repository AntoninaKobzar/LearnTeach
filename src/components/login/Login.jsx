import React, { useState } from 'react';
import authService from '../../services/authService';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    role: '' // Add a field to specify the user role (teacher or student)
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
    if (formData.role === 'teacher') {
      authService.teacherLogin(formData.username, formData.password)
        .then(userData => {
          // Handle teacher login
          console.log('Teacher logged in:', userData);
        })
        .catch(error => {
          // Handle login error
          console.error('Teacher login failed:', error);
        });
    } else if (formData.role === 'student') {
      authService.studentLogin(formData.username, formData.password)
        .then(userData => {
          // Handle student login
          console.log('Student logged in:', userData);
        })
        .catch(error => {
          // Handle login error
          console.error('Student login failed:', error);
        });
    } else {
      // Handle invalid role
      console.error('Invalid role:', formData.role);
    }
  };

  return (
    <div>
      <h2>Login</h2>
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
          <label htmlFor="role">Role:</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="">Select role</option>
            <option value="teacher">Teacher</option>
            <option value="student">Student</option>
          </select>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;