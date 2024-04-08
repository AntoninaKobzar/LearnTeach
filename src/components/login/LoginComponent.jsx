import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../modal/Modal';
import CloseIcon from '../../assets/images/close-1.svg';
import style from './login.module.css'

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isModalOpen, setIsModalOpen] = useState(true);
  const toggleModal = () => {

      setIsModalOpen(!isModalOpen);
      navigate('/');
  };
const navigate = useNavigate();

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData(prevState => ({
    ...prevState,
    [name]: value
  }));
};

  const handleLogin = async () => {
    // Send login data to backend
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });
    // Handle response
  };

  return (
    <Modal  isOpen={isModalOpen} onClose={toggleModal}>
         <img className={style.close} src={CloseIcon} width="30" height="30" alt='close icon' onClick={toggleModal} />
         <form className={style.form} onSubmit={handleLogin}>
         <label htmlFor="email">Email:</label>
          <input id="email" type="email" placeholder="kat@gmail.com"
           name="email" value={email} onChange={handleChange}/>
          <br />
          <label htmlFor="password">Пароль:</label>
          <input id="password" type="password" placeholder="nkeqr8" 
          name="password" value={password} onChange={handleChange}/>
      <button className={style.btn} type="submit">Увійти</button>
    </form>
    </Modal>
  );
};

export default LoginComponent;
