
import React, { useState } from 'react';
import studentsService from '../../services/studentsService';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/AuthContext';

const RegisterStudent = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    email: '',
    role:'student',
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
    studentsService.createStudent(formData)
      .then(userData => {
        login();
        navigate('/student');
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
      {/* <h2>Student Registration</h2> */}
      <form onSubmit={handleSubmit}encType="multipart/form-data" method="post">
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
      {/* <button onClick={handleRegistration}>Register as Student</button> */}
    </div>
  );
};

export default RegisterStudent;
