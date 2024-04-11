import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import subjectsService from '../../services/subjectsService';
import authService from '../../services/authService';
import Modal from '../modal/Modal';
import CloseIcon from '../../assets/images/close-1.svg';
import style from './register.module.css';

const RegistrationComponent = () => {
  const [role, setRole] = useState("");
  const [filePreview, setFilePreview] = useState(null); // State for file preview
  const [subjects, setSubjects] = useState([]);
  // const [registrationError, setRegistrationError] = useState(null);
  // const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: '',
    photo: null, // Store the file object
      subjects: [],
      education: '',
      experience: '',
      text: '',
      price: '',
      online: false,
      offline: false
  });
  
  const [isModalOpen, setIsModalOpen] = useState(true);
  const navigate = useNavigate();
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    navigate('/');
  };

  useEffect(() => {
    subjectsService.getAll()
      .then(subjects => {
        setSubjects(subjects);
      })
      .catch(error => {
        console.error('Error fetching subjects:', error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // const handleInfoChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData(prevState => ({
  //     ...prevState,
  //     info: {
  //       ...prevState.info,
  //       [name]: value
  //     }
  //   }));
  // };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
        [name]: checked
      
    }));
  };

  // const handleSubjectChange = (event) => {
  //   const { options } = event.target;
  //   const selectedSubjects = [];
  //   for (let i = 0; i < options.length; i++) {
  //     if (options[i].selected) {
  //       selectedSubjects.push(options[i].value);
  //     }
  //   }
  //   setFormData(prevState => ({
  //     ...prevState,
  //     subjects: selectedSubjects
  //   }));
  // };
  const handleRoleChange = (event) => {
    const selectedRole = event.target.value;
    setRole(selectedRole);
    setFormData(prevState => ({
      ...prevState, role: selectedRole
    }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setFormData(prevState => ({
      ...prevState,
      photo: file 
    }));
  };


  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await authService.register(formData);
  //     alert('User registered successfully!');
  //     // Reset the form after successful registration
  //     setFormData({
  //       username: '',
  //       email: '',
  //       password: '',
  //       role: '',
  //       photo: null,
  //         subjects: [],
  //         education: '',
  //         experience: '',
  //         text: '',
  //         price: '',
  //         online: false,
  //         offline: false
        
  //     });
  //   } catch (error) {
  //     console.error('Registration error:', error);
  //     alert('Registration failed. Please try again.');
  //   }
  // };

  const handleSubjectChange = (event) => {
    const { options } = event.target;
    const selectedSubjects = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedSubjects.push(options[i].value);
      }
    }
    setFormData(prevState => ({
      ...prevState,
      subjects: selectedSubjects
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authService.register(formData); // Pass formData directly to register function
      alert('User registered successfully!');
      setFormData({
        username: '',
        email: '',
        password: '',
        role: '',
        photo: null,
        education: '',
        experience: '',
        text: '',
        price: '',
        online: false,
        offline: false
      });
      document.getElementById('photo').value = null; // Clear file input value
    } catch (error) {
      console.error('Registration error:', error);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <Modal isOpen={isModalOpen} onClose={toggleModal}>
      <img className={style.close} src={CloseIcon} width="30" height="30" alt='close icon' onClick={toggleModal} />
      <div>
        <select value={role} onChange={handleRoleChange}>
          <option value="">Оберіть</option>
          <option value="student">Учень</option>
          <option value="teacher">Вчитель</option>
        </select>
        {role && (
          <form className={style.form} onSubmit={handleSubmit}>
            <label htmlFor="photo">Фото:</label>
            <input
              id="photo"
              type="file"
              accept="image/*"
              name="photo"
              onChange={handlePhotoChange}
            />
            {/* {filePreview && (
              <img src={filePreview} alt="Preview" width={100} />
            )} */}
            <br />
            <label htmlFor="username">Ім'я:</label>
            <input id="username" type="text" placeholder="Катерина" name="username" value={formData.username} onChange={handleChange} />
            <br />
            <label htmlFor="email">Email:</label>
            <input id="email" type="email" placeholder="kat@gmail.com" name="email" value={formData.email} onChange={handleChange} />
            <br />
            <label htmlFor="password">Пароль:</label>
            <input id="password" type="password" placeholder="nkeqr8" name="password" value={formData.password} onChange={handleChange} />
            <br/>
            {role === 'teacher' && (
              <>
                <label htmlFor="subjects">Оберіть предмети, які викладаєте:</label>
                <select
                  id="subjects"
                  multiple
                  name="subjects"
                  value={formData.subjects}
                  onChange={handleSubjectChange}
                >
                 {subjects.map((subject, index) => (
  <option key={index} value={subject.name}>
    {subject.name}
  </option>
))}
                </select>
                <br />
                <label htmlFor="education">Освіта:</label>
                <input
                  id="education"
                  type="text"
                  name="education"
                  value={formData.education}
                  onChange={handleChange}
                />
                <br />
                <label htmlFor="experience">Досвід:</label>
                <input
                  id="experience"
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                /> років
                <br />
                <label>Про себе:</label>
                <textarea
                  name="text"
                  value={formData.text}
                  onChange={handleChange}
                />
                <br />
                <label htmlFor="price">Вартість години заняття:</label>
                <input
                  id="price"
                  type="text"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                /> грн/год
                <br />
                <label htmlFor="online">
                  Можу займатись онлайн:
                  <input
                    id="online"
                    type="checkbox"
                    name="online"
                    checked={formData.online}
                    onChange={handleCheckboxChange}
                  />
                </label>
                <br />
                <label htmlFor="offline">
                  Можу займатись офлайн:
                  <input
                    id="offline"
                    type="checkbox"
                    name="offline"
                    checked={formData.offline}
                    onChange={handleCheckboxChange}
                  />
                </label>
              </>
            )}
            <button className={style.btn} type="submit">Зареєструватися</button>
          </form>
        )}
      </div>
    </Modal>
  );
};

export default RegistrationComponent;



