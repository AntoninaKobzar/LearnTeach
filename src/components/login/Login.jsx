

import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/AuthContext';
import React, { useState} from 'react';
import studentsService from '../../services/studentsService';
import teachersService from '../../services/teachersService';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
        name: '',
        password: '',
        role: '' // Add a field to specify the user role (teacher or student)
      });
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState(null);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);
    
        try {
          let userData;
          if (formData.role === 'teacher') {
            userData = await teachersService.teacherLogin(formData.name, formData.password);
            // Handle teacher login
            console.log('Teacher logged in:', userData);
            login();
            navigate('/teacher'); 
          } else if (formData.role === 'student') {
            userData = await studentsService.studentLogin(formData.name, formData.password);
            // Handle student login
            console.log('Student logged in:', userData);
            login();
            navigate('/student'); 
          } else {
            throw new Error('Invalid role');
          }
        } catch (error) {
          setError(error.message || 'Login failed');
          console.error('Login failed:', error);
        } finally {
          setLoading(false);
        }
      };

  return (
    <div>
      <h2>Login</h2>
      {error && <div>{error}</div>}
      <form onSubmit={handleSubmit}>
         <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.name}
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
        <button type="submit" disabled={loading}>Login</button>
        {loading && <div>Loading...</div>}
      </form>
    </div>
  );
};

export default Login;