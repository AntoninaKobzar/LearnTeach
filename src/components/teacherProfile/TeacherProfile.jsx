import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/AuthContext';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import style from './teacherProfile.module.css';

const TeacherProfile = () => {
  const [subjects, setSubjects] = useState([]);
  const { isAuthenticated, logout, user } = useAuth();
  const navigate = useNavigate();

  

  // Check if user is authenticated
  if (!isAuthenticated) {
    return <div>Please log in</div>;
  }

  // Fetch subjects when component mounts
  useEffect(() => {
    // Fetch subjects using user data
    subjectService.getAll()
      .then(subjects => {
        setSubjects(subjects);
      }).catch((error) => {
        console.error('Error fetching subjects:', error);
      });
  }, [user]); // Trigger effect when user data changes

  return (
    <>
      <Header />
      <div className={style.card}>
        {/* Render user data */}
        {user && user.photo && <img src={user.photo} className={style.photo} width='150px' alt='teacher-photo' />}
        <p className={style.name}>{user && user.username}</p>
        {/* Render subjects */}
        <p className={style.subjects}>Предмети:</p>
        <ul>
          {subjects.map(subject => (
            <li className={style.subject} key={subject}>{subject}</li>
          ))}
        </ul>
        {/* Render other user data */}
        <p className={style.education}>Освіта: {user.education}</p>
        <p className={style.experience}>Досвід: {user.experience ? user.experience + ' років' : 'Не вказано'}</p>
        <p className={style.online}>Онлайн: {user.online ? 'Так' : 'Ні'}</p>
        <p className={style.offline}>Офлайн: {user.offline ? 'Так' : 'Ні'}</p>
        <p className={style.about}>{user.text}</p>
        <p className={style.price}>{user.price} грн/год</p>
        <button className={style.btn} onClick={handleLogout}>Вийти</button>
        <button className={style.btn}>Редагувати профіль</button>
        <button className={style.btn}>Зв'язатись з вчителем</button>
      </div>
      <Footer />
    </>
  );
};

export default TeacherProfile;
