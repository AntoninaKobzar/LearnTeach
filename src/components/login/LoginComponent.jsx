import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../modal/Modal';
import CloseIcon from '../../assets/images/close-1.svg';
import style from './login.module.css';
import { useAuth } from '../../hooks/AuthContext'; 

const LoginComponent = () => {
  const { isAuthenticated, login } = useAuth();
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

    try {
      // Perform login action using formData
      console.log("Logging in with:", formData);
      // Example: const response = await authService.login(formData);
      const response = { status: 201 }; // Mock response for testing

      if (response.status === 201) {
        // Redirect user based on role
        const destination = (formData.role === "teacher") ? '/auth/teacher' : '/auth/student';
        navigate(destination);
        alert('Logged in successfully!');
        login();
      } else {
        // Handle login failure
        alert('Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      // Handle login error
      alert('Login failed');
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
        <button className={style.btn} type="submit">Login</button>
      </form>
    </Modal>
  );
};

export default LoginComponent;
