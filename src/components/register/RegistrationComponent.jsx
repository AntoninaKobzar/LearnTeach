import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import subjectsService from '../../services/subjectsService';
import authService from '../../services/authService';
import Modal from '../modal/Modal';
import CloseIcon from '../../assets/images/close-1.svg';
import style from './register.module.css';

const RegistrationComponent = () => {
  const [role, setRole] = useState();
  const [file, setFile] = useState();
  const [subjects, setSubjects] = useState([]);
  const [registrationError, setRegistrationError] = useState(null);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
    photo: "",
    info: {
      subjects: [],
      education: "",
      experience: "",
      text: "",
      price: "",
      online: false,
      offline: false
    }
  });
  
  const [isModalOpen, setIsModalOpen] = useState(true);
    const toggleModal = () => {

        setIsModalOpen(!isModalOpen);
        navigate('/');
    };
  const navigate = useNavigate();

  useEffect(() => {
    subjectsService.getAll()
      .then(allSubjects => {
        setSubjects(allSubjects);
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

  const handleInfoChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      info: {
        ...prevState.info,
        [name]: value
      }
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      info: {
        ...prevState.info,
        [name]: checked
      }
    }));
  };

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
      info: {
        ...prevState.info,
        subjects: selectedSubjects
      }
    }));
  };

  const handleRoleChange = (event) => {
    const selectedRole = event.target.value;
    setFormData(prevState => ({
      ...prevState, role: selectedRole
    }));
  };

  const handlePhotoChange = (e) => {
    const selectedFile = e.target.files[0];
    const fileUrl = URL.createObjectURL(selectedFile);
    setFile(fileUrl);
    // reader.readAsDataURL(file);

    setFormData(prevState => ({
      ...prevState,
      photo: fileUrl
    }));
  };

  useEffect(() => {
    console.log('File State:', file);
  }, [file]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password || !formData.username) {
      alert('Please fill out all required fields.');
      return;
    }

    try {
      const response = await authService.register(formData);
      console.log(response)
      if (response.status === 201) {
        // Registration successful
        setRegistrationSuccess(true);
        alert('Teacher registered successfully!');
        (formData.role === "teacher") ? navigate('/auth/teacher') : navigate('/auth/student');
      } else {
        // Handle other status codes or errors
        // Example: Registration failed due to validation error
        setRegistrationError('Registration failed due to validation error');
      }
    } catch (error) {
      setRegistrationError(error.message || 'Registration failed');
      console.error('Registration error:', error);
    }
  };

  return (
    <Modal  isOpen={isModalOpen} onClose={toggleModal}>
         <img className={style.close} src={CloseIcon} width="30" height="30" alt='close icon' onClick={toggleModal} />
    <div>
      
      {registrationSuccess && <p>Registration successful!</p>}
      {registrationError && <p>{registrationError}</p>}
      <select value={role} onChange={handleRoleChange}>
        <option value="">Select Role</option>
        <option value="student">Student</option>
        <option value="teacher">Teacher</option>
      </select>
      {formData.role === 'student' && (
        <form className={style.form} onSubmit={handleSubmit}>
       
          <label htmlFor="photo">Фото:</label>
          <input
            id="photo"
            type="file"
            name="photo"
            onChange={handlePhotoChange}
          />
          <img src={file} alt="Uploaded" width={100}/>
          <br />
          <label htmlFor="username">Ім'я:</label>
          <input id="username" type="text" placeholder="Катерина" name="username" value={formData.username} onChange={handleChange} />
          <br />
          <label htmlFor="email">Email:</label>
          <input id="email" type="email" placeholder="kat@gmail.com" name="email" value={formData.email} onChange={handleChange} />
          <br />
          <label htmlFor="password">Пароль:</label>
          <input id="password" type="password" placeholder="nkeqr8" name="password" value={formData.password} onChange={handleChange} />
          <button className={style.btn} type="submit">Зареєструватися</button>
        </form>
      )}
      {formData.role === 'teacher' && (
        <form className={style.form} onSubmit={handleSubmit}>
          <label htmlFor="photo">Фото:</label>
          <input
            id="photo"
            type="file"
            name="photo"
            onChange={handlePhotoChange}
          />
          <img src={file} alt="Uploaded"width={100} />
          <br />
          <label htmlFor="username">Ім'я:</label>
          <input id="username" type="text" placeholder="Катерина" name="username" value={formData.username} onChange={handleChange} />
          <br />
          <label htmlFor="email">Email:</label>
          <input id="email" type="email" placeholder="kat@gmail.com" name="email" value={formData.email} onChange={handleChange} />
          <br />
          <label htmlFor="password">Пароль:</label>
          <input id="password" type="password" placeholder="nkeqr8" name="password" value={formData.password} onChange={handleChange} />
          <br />
          <label htmlFor="subjects">Оберіть предмети, які викладаєте:</label>
          <select
            id="subjects"
            multiple
            name="subjects"
            value={formData.info.subjects}
            onChange={handleSubjectChange}
          >
            {subjects.map(subject => (
              <option key={subject.id} value={subject.name}>
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
            value={formData.info.education}
            onChange={handleInfoChange}
          />
          <br />
          <label htmlFor="experience">Досвід:</label>
          <input
            id="experience"
            type="text"
            name="experience"
            value={formData.info.experience}
            onChange={handleInfoChange}
          /> років
          <br />
          <label>Про себе:</label>
          <textarea
            name="text"
            value={formData.info.text}
            onChange={handleInfoChange}
          />
          <br />
          <label htmlFor="price">Вартість години заняття:</label>
          <input
            id="price"
            type="text"
            name="price"
            value={formData.info.price}
            onChange={handleInfoChange}
          /> грн/год
          <br />
          <label htmlFor="online">
            Можу займатись онлайн:
            <input
              id="online"
              type="checkbox"
              name="online"
              checked={formData.info.online}
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
              checked={formData.info.offline}
              onChange={handleCheckboxChange}
            />
          </label>
          <button className={style.btn} type="submit">Зареєструватися</button>
        </form>
      )}
    </div>
    </Modal>
  );
};

export default RegistrationComponent;


