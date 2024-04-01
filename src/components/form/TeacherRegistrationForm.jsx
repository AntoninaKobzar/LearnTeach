import React, { useState, useEffect } from 'react';
import subjectService from '../../services/subjects';
import teacherService from '../../services/teachers';
import CloseIcon from '../../assets/images/close-1.svg'
import style from './form.module.css';


const TeacherRegistrationForm = ({ close }) => {
  const [subjects, setSubjects] = useState([]);
  const [teacherData, setTeacherData] = useState({
    photo: '',
    name: '',
    email: '',
    password: '', 
    info: {
      subjects: [],
      education: '',
      experience: '',
      text: '',
      price: '',
      online: false,
      offline: false,
    },
  });

  useEffect(() => {
    subjectService.getAll()
      .then(initialSubjects => { 
        setSubjects(initialSubjects);
      })
      .catch((error) => {
        console.error('Error fetching subjects:', error);
      });
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

  const handleSubjectChange = (event) => {
    const { options } = event.target;
    const selectedSubjects = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedSubjects.push(options[i].value);
      }
    }
    setTeacherData(prevState => ({
      ...prevState,
      info: {
        ...prevState.info,
        subjects: selectedSubjects
      }
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    teacherService.create(teacherData)
      .then(response => {
        alert('Teacher registered successfully!');
        // Handle success
      })
      .catch(error => {
        console.error('Teacher registration failed:', error);
        // Handle error
      });
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   teacherService.create(teacherData)
  //     .then((returnedTeacher) => {
  //       // Reset form state after successful submission
  //       setTeacherData({
  //         returnedTeacher
  //       });
  //       // Optionally, display a confirmation message
  //       alert('Teacher registration successful!');
  //       // Close the form
       
  //     })
  //     .catch((error) => {
  //       console.error('Error creating teacher:', error);
  //       // Optionally, display an error message to the user
  //       alert('Error creating teacher. Please try again.');
  //     });
  // };


  return (
      <form className={style.form} onSubmit={handleSubmit} encType="multipart/form-data" method="post">
        <img className={style.close} src={CloseIcon} width="30" height="30" alt='close icon'onSubmit={close}/>
        <label htmlFor="photo">Фото:</label>
        <input
          id="photo"
          type="file"
          name="photo"
          value={teacherData.photo}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="name">Ім'я:</label>
        <input
          id="name"
          type="text"
          name="name"
          value={teacherData.name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          name="email"
          value={teacherData.email}
          onChange={handleChange}
        />
         <br />
        <label htmlFor="password">Пароль:</label>
        <input
          id="password"
          type="password"
          name="password"
          value={teacherData.password}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="subjects">Оберіть предмети, які викладаєте:</label>
        <select
          id="subjects"
          multiple
          value={teacherData.info.subjects}
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
          value={teacherData.info.education}
          onChange={handleInfoChange}
        />
        <br />
        <label htmlFor="experience">Досвід:</label>
        <input
          id="experience"
          type="text"
          name="experience"
          value={teacherData.info.experience}
          onChange={handleInfoChange}
        />
        <br />
        <label>Про себе:</label>
        <textarea
          name="text"
          value={teacherData.info.text}
          onChange={handleInfoChange}
        />
        <br />
        <label htmlFor="price">Вартість години заняття:</label>
        <input
          id="price"
          type="text"
          name="price"
          value={teacherData.info.price}
          onChange={handleInfoChange}
        />
        <br />
        <label htmlFor="online">
          Можу займатись онлайн:
          <input
            id="online"
            type="checkbox"
            name="online"
            checked={teacherData.info.online}
            onChange={handleCheckboxChange}
          />
        </label>
        <label htmlFor="offline">
          Можу займатись офлайн:
          <input
            id="offline"
            type="checkbox"
            name="offline"
            checked={teacherData.info.offline}
            onChange={handleCheckboxChange}
          />
        </label>
        <button className={style.btn} type="submit">Submit</button>
      </form>
  );
};

export default TeacherRegistrationForm;