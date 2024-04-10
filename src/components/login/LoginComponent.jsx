import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../../services/authService';
import Modal from '../modal/Modal';
import CloseIcon from '../../assets/images/close-1.svg';
import style from './login.module.css';
import { useAuth } from '../../hooks/AuthContext';

const LoginComponent = () => {
  const { login } = useAuth();
  const [formData, setFormData] = useState({ email: "", password: "", role: "" }); // Add 'role' property
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
  //    e.preventDefault();
  // if (!formData.email || !formData.password || !role) {
  //   alert('Please fill out all required fields.');
  //   return;
  // }
  // if (role === "teacher" && !selectedFile) {
  //   alert('Please upload a photo.');
  //   return;
  // }

//   try {
//     // Directly pass the formData object to authService.register
//     const response = await authService.register({
//       email: formData.email,
//       password: formData.password,
//       role: formData.role,
//       photo: selectedFile, // Assuming selectedFile is the uploaded photo
//       info: formData.info
//     });
    
//     if (response && response.status === 200) {
//       alert('Registration successful!');
//       (role === "teacher") ? navigate('/auth/teacher') : navigate('/auth/student');
//     } else {
//       alert('Registration failed');
//     }
//   } catch (error) {
//     console.error('Registration error:', error);
//     alert('Registration failed');
//   }
// };
    e.preventDefault();
    if (!formData.email || !formData.password || !formData.role) {
      alert('Please fill out all required fields.');
      return;
    }
    try {
      console.log("Logging in with:", formData);
      const response = await authService.login(formData.email, formData.password, formData.role);
      // const response = { status: 201 }; // Mock response for testing


      
      if (response.data && response.data.token) {
        // Store the token in local storage
        localStorage.setItem('token', response.data.token);

      // if (response.status === 200) {
        // Redirect user based on role
        const destination = (formData.role === "teacher") ? '/auth/login/teacher' : '/auth/login/student';
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
        <br />
        {/* Add select input for role */}
        <label htmlFor="role">Role:</label>
        <select id="role" name="role" value={formData.role} onChange={handleChange}>
          <option value="teacher">Teacher</option>
          <option value="student">Student</option>
        </select>
        <br />
        <button className={style.btn} type="submit">Login</button>
      </form>
    </Modal>
  );
};

export default LoginComponent;

