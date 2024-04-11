import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../../services/authService';
import Modal from '../modal/Modal';
import CloseIcon from '../../assets/images/close-1.svg';
import style from './login.module.css';
import { useAuth } from '../../hooks/AuthContext';

const LoginComponent = () => {
  const { login, isAuthenticated } = useAuth();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isModalOpen, setIsModalOpen] = useState(true);
  const navigate = useNavigate();

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    navigate('/');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      alert('Please fill out all required fields.');
      return;
    }

    try {
      const { token, user } = await authService.login(formData.email, formData.password);

      if (token) {
        localStorage.setItem('token', token);
        // Store user data in context
        login(user); // Assuming this function sets authentication state
        const destination = (user.role === "teacher") ? '/users/teacher' : '/users/student';
        navigate(destination);
        alert('Logged in successfully!');
      }
       
      // } else {
      //   console.error('Unexpected response format:', response);
      //   alert('Login failed. Please try again.');
      // }
    } catch (error) {
      console.error('Login error:', error);
      if (error.message === 'Invalid email or password. Please try again.') {
        alert('Invalid email or password. Please check your credentials.');
      } else {
        alert('Login failed. Please try again later.');
      }
    }
  };

  return (
    <Modal isOpen={isModalOpen} onClose={toggleModal}>
      <img className={style.close} src={CloseIcon} width="30" height="30" alt='close icon' onClick={toggleModal} />
      <form className={style.form} onSubmit={handleLogin}>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" placeholder="kat@gmail.com" name="email" value={formData.email} onChange={handleChange} />
        <br />
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" placeholder="nkeqr8" name="password" value={formData.password} onChange={handleChange} />
        <br />
        <button className={style.btn} type="submit">Login</button>
      </form>
    </Modal>
  );
};

export default LoginComponent;

