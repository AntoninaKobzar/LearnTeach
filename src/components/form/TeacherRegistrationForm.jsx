import React, { useState } from 'react';
import teacherService from '../../services/teachers'
import style from './form.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const TeacherRegistrationForm = ({ close }) => {
  const [teacherData, setTeacherData] = useState({
    photo: '',
    name: '',
    email: '',
    info: {
      subject: [],
      education: '',
      experience: '',
      text: '',
      price:'',
      online: false,
      offline: false
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeacherData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleInfoChange = (e) => {
    const { name, value } = e.target;
    setTeacherData(prevState => ({
      ...prevState,
      info: {
        ...prevState.info,
        [name]: value
      }
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setTeacherData(prevState => ({
      ...prevState,
      info: {
        ...prevState.info,
        [name]: checked
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    teacherService
      .create(teacherData)
      .then((returnedTeacher) => {
        setTeacherData(returnedTeacher);
      })
      .catch((error) => {
        console.error('Error creating teacher:', error);
      });
  };

 
    
  
  return (
    <form className={style.form} onSubmit={handleSubmit}>
 <FontAwesomeIcon className={style.close} icon={faTimes} onClick={close} />
      <label for="photo">Фото:   </label>
        <input id="photo"
          type="file"
          name="photo"
          value={teacherData.photo}
          onChange={handleChange}
        />
        <br/>
        <label for="name">Ім'я:</label> 
        <input id="name"
          type="text"
          name="name"
          value={teacherData.name}
          onChange={handleChange}
        />
        <br/>
      <label for="email">Email:</label>
        <input id="email"
          type="email"
          name="email"
          value={teacherData.email}
          onChange={handleChange}
        />
        <br/>
      <label for="education">
        Освіта: </label>
        <input id="education"
          type="text"
          name="education"
          value={teacherData.info.education}
          onChange={handleInfoChange}
        />
        <br/>
      <label for="experience">Досвід:</label>
        <input id="experience"
          type="text"
          name="experience"
          value={teacherData.info.experience}
          onChange={handleInfoChange}
        />
        <br/>
      <label>
        Про себе:</label>
        <textarea
          name="text"
          value={teacherData.info.text}
          onChange={handleInfoChange}
        />
        <br/>
      <label for="price">
        Вартість години занняття:</label>
        <input id="price"
          type="text"
          name="price"
          value={teacherData.info.price}
          onChange={handleInfoChange}
        />
        <br/>
      <label for="online">
        Можу займатись онлайн:
        <input id="online"
          type="checkbox"
          name="online"
          checked={teacherData.info.online}
          onChange={handleCheckboxChange}
        /></label>
      <label for="offline">
        Можу займатись офлайн:
        <input id="offline"
          type="checkbox"
          name="offline"
          checked={teacherData.info.offline}
          onChange={handleCheckboxChange}
        /></label>
      <button className={style.btn} type="submit">Submit</button>
    </form>
  );
};

export default TeacherRegistrationForm;