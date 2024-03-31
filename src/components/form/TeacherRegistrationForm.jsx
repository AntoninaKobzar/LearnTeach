import React, { useState,useEffect } from 'react';
import subjectService from '../../services/subjects';
import teacherService from '../../services/teachers'
import style from './form.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const TeacherRegistrationForm = ({ close }) => {
  const [subjects, setSubjects] = useState([])
  const [teacherData, setTeacherData] = useState({
    photo: '',
    name: '',
    email: '',
    info: {
      subjects: [],
      education: '',
      experience: '',
      text: '',
      price:'',
      online: false,
      offline: false
    }
  });

  useEffect(() => {
    subjectService.getAll()
        .then(initialSubjects => { 
            setSubjects(initialSubjects);
        }).catch((error) => {
            
        })
}, []);
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

  const handleSubjectChange = (e) => {
    const { value } = e.target;
    const updatedSubjects = [...teacherData.info.subjects];
    const index = updatedSubjects.indexOf(value);

    if (index === -1) {
      updatedSubjects.push(value);
    } else {
      updatedSubjects.splice(index, 1);
    }

    setTeacherData(prevState => ({
      ...prevState,
      info: {
        ...prevState.info,
        subjects: updatedSubjects
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
      // setTeacherData('')
  };

  return (
    <form className={style.form} onSubmit={handleSubmit} >
  <FontAwesomeIcon className={style.close} icon={faTimes} onClick={close} />
      <label htmlFor="photo">Фото:   </label>
        <input id="photo"
          type="file"
          name="photo"
          value={teacherData.photo}
          onChange={handleChange}
        />
        <br/>
        <label htmlFor="name">Ім'я:</label> 
        <input id="name"
          type="text"
          name="name"
          value={teacherData.name}
          onChange={handleChange}
        />
        <br/>
      <label htmlFor="email">Email:</label>
        <input id="email"
          type="email"
          name="email"
          value={teacherData.email}
          onChange={handleChange}
        />
        <br/>
        <label>Предмети, які ви викладаєте:</label>
      <div>
        {subjects.map(subject => (
          <div key={subject.id}>
            <input
              type="checkbox"
              id={subject.id}
              name="subject"
              value={subject.name}
              checked={teacherData.info.subjects.includes(subject.name)}
              onChange={handleSubjectChange}
            />
            <label htmlFor={subject.id}>{subject.name}</label>
          </div>
        ))}
      </div>
      <label htmlFor="education">
        Освіта: </label>
        <input id="education"
          type="text"
          name="education"
          value={teacherData.info.education}
          onChange={handleInfoChange}
        />
        <br/>
      <label htmlFor="experience">Досвід:</label>
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
      <label htmlFor="price">
        Вартість години занняття:</label>
        <input id="price"
          type="text"
          name="price"
          value={teacherData.info.price}
          onChange={handleInfoChange}
        />
        <br/>
      <label htmlFor="online">
        Можу займатись онлайн:
        <input id="online"
          type="checkbox"
          name="online"
          checked={teacherData.info.online}
          onChange={handleCheckboxChange}
        /></label>
      <label htmlFor="offline">
        Можу займатись офлайн:
        <input id="offline"
          type="checkbox"
          name="offline"
          checked={teacherData.info.offline}
          onChange={handleCheckboxChange}
        /></label>
      <button className={style.btn} type="submit" >Submit</button>
    </form>
  );
};

export default TeacherRegistrationForm;