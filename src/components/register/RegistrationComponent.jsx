import React, { useState,useEffect } from 'react';
import {getAll} from '../../services/subjectsService';
import style from './register.module.css'

const RegistrationComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [username, setUsername] = useState('');
  const [photo, setPhoto] = useState('');
  const [subjects, setSubjects] = useState([]);
  const [education, setEducation] = useState('');
  const [experience, setExperience] = useState('');
  const [text, setText] = useState('');
  const [price, setPrice] = useState('');
  const [online, setOnline] = useState(false);
  const [offline, setOffline] = useState(false);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      username,
      email,
      password,
      role,
      photo,
      info: {
        subjects,
        education,
        experience,
        text,
        price,
        online,
        offline
      }
    };

    // Send registration data to backend
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    // Handle response
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const initialSubjects = await getAll();
        setSubjects(initialSubjects);
      } catch (error) {
        console.error('Error fetching subjects:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs only once on mount

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
    if (name === 'online') {
      setOnline(checked);
    } else if (name === 'offline') {
      setOffline(checked);
    }
  };

  const handleSubjectChange = (e) => {
    const { options } = e.target;
    const selectedSubjects = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedSubjects.push(options[i].value);
      }
    }
    setSubjects(selectedSubjects);
  };

  return (
    <div>
      {/* <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /> */}
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="">Select Role</option>
        <option value="student">Student</option>
        <option value="teacher">Teacher</option>
      </select>
      {role === 'student' && (
        <form className={style.form} onSubmit={handleSubmit}>
          <div>
            <label htmlFor="photo">Photo:</label>
            <input
              id="photo"
              type="file"
              name="photo"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
            />
          </div>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button className={style.btn} type="submit">Register</button>
        </form>
      )}
      {role === 'teacher' && (
        <form className={style.form} onSubmit={handleSubmit}>
          <div>
            <label htmlFor="photo">Photo:</label>
            <input
              id="photo"
              type="file"
              name="photo"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
            />
          </div>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <div>
          <br />
        <label htmlFor="subjects">Оберіть предмети, які викладаєте:</label>
         <select
           id="subjects"
           multiple
          value={subjects}
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
           value={education}
           onChange={handleInfoChange}
         />
         <br />
        <label htmlFor="experience">Досвід:</label>
         <input
           id="experience"
           type="text"
           name="experience"
           value={experience}
           onChange={handleInfoChange}
         />
        <br />
        <label>Про себе:</label>
         <textarea
           name="text"
          value={text}
           onChange={handleInfoChange}
         />
         <br />
         <label htmlFor="price">Вартість години заняття:</label>
         <input
          id="price"
           type="text"
           name="price"
           value={price}
           onChange={handleInfoChange}
         />
         <br />
         <label htmlFor="online">
          Можу займатись онлайн:
           <input
             id="online"
             type="checkbox"
            name="online"
             checked={online}
             onChange={handleCheckboxChange}
           />
         </label>
         <label htmlFor="offline">
           Можу займатись офлайн:
          <input
             id="offline"
            type="checkbox"
             name="offline"
             checked={offline}
            onChange={handleCheckboxChange}
           />
         </label>
          </div>
          <button className={style.btn} type="submit">Register</button>
        </form>
      )}
    </div>
  );
};

export default RegistrationComponent;

