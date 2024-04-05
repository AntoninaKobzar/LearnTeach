

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
            userData = await teachersService.teacherLogin(formData.name, formData.password,formData.role);
            // Handle teacher login
            console.log('Teacher logged in:', userData);
            login();
            navigate('/teachers'); 
          } else if (formData.role === 'student') {
            userData = await studentsService.studentLogin(formData.name, formData.password,formData.role);
            // Handle student login
            console.log('Student logged in:', userData);
            login();
            navigate('/students'); 
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
          <label htmlFor="name">Ім'я:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
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