

import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/AuthContext';
import React, { useState} from 'react';
import studentsService from '../../services/studentsService';
import teachersService from '../../services/teachersService';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
        username: '',
        password: '',
        role: 'teacher' || 'student'
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
            userData = await teachersService.teacherLogin(formData.username, formData.password, formData.role);
            console.log('Teacher logged in:', userData);
            if (userData.role === formData.role) { // Check the role received from the server
              login();
              navigate('/teacher');
            } else {
              throw new Error('You are not a teacher');
              navigate('/login');
            }
          } else if (formData.role === 'student') {
            userData = await studentsService.studentLogin(formData.username, formData.password, formData.role);
            console.log('Student logged in:', userData);
            if (userData.role === formData.role) { // Check the role received from the server
              login();
              navigate('/student');
            } else {
              throw new Error('You are not a student');
            }
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
      {error && <div>{error}</div>}
      <form onSubmit={handleSubmit}>
         <div>
          <label htmlFor="username">Нікнейм:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Пароль:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="role">Увійти як:</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="">Оберіть</option>
            <option value="teacher">Вчитель</option>
            <option value="student">Учень</option>
          </select>
        </div>
        <button type="submit" disabled={loading}>Увійти</button>
        {loading && <div>Loading...</div>}
      </form>
    </div>
  );
};

export default Login;