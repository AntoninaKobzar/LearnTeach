import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/AuthContext';
import subjectService from '../../services/subjectsService';
import authService from '../../services/authService';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import style from './studentProfile.module.css';

const StudentProfile = () => {
  const [subjects, setSubjects] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [teachersWithSubject, setTeachersWithSubject] = useState([]);
  const navigate = useNavigate();
  const { isAuthenticated, logout, user } = useAuth();
 

  const handleLogout = () => {
    logout();
    navigate('/users/login');
  };

  if (!isAuthenticated) {
    return <div>Please log in</div>;
  }

  useEffect(() => {
    subjectService.getAll()
      .then(initialSubjects => {
        setSubjects(initialSubjects);
      }).catch((error) => {
        console.error('Error fetching subjects:', error);
      });
  }, []);

  const handleSubjectClick = async (subjectId) => {
    try {
      const selectedSubject = subjects.find(subject => subject.id === subjectId);
      setSelectedSubject(selectedSubject);
      const teachers = await authService.getBySubjectAndRole(selectedSubject.name);
      setTeachersWithSubject(teachers);
    } catch (error) {
      console.error('Error fetching teachers with subject:', error);
    }
  };

  return (
    <div>
      <Header />
      <div className={style.wrapper}>
        <div className={style.card}>
          {user && user.photo && <img src={user.photo} className={style.photo} width='150px' alt='student-photo' />}
          <p className={style.name}>{user && user.name}</p>
        </div>
      </div>
      <div>
        <h2 className={style.title}>Популярні предмети</h2>
        <ul className={style['subject-list']}>
          {Array.isArray(subjects) && subjects.length > 0 ? (
            subjects.map(subject => (
              <li
                className={style['subject-item']}
                key={subject.id}
                onClick={() => handleSubjectClick(subject.id)}
              >
                {subject.name}
              </li>
            ))
          ) : (
            <li>No subjects found</li>
          )}
        </ul>
        {selectedSubject && (
  <div>
    <h2> {selectedSubject.name}</h2>
    <div className={style.teacherList}>
      {teachersWithSubject.map(teacher => (
        <div className={style.teacherCard} key={teacher.email}>
          {teacher.photo && <img className={style.teacherPfoto} src={teacher.photo} alt='teacher-photo' />}
          <p>{teacher.name}</p>
          <p className={style.subjects}></p>
                <ul>
                {teacher.subjects.map(subject=>(
                    <li className={style.subject} key={subject.id}>{subject}</li>
                ))} 
            </ul>
            <p className={style.education}>Освіта: {teacher.education}</p>
            <p className={style.experience}>Досвід: {teacher.experience ? teacher.experience + ' years' : 'Not specified'}</p>
            <p className={style.online}>Онлайн: {teacher.online ? 'Так' : 'Ні'}</p>
            <p className={style.offline}>Офлайн: {teacher.offline ? 'Так' : 'Ні'}</p>
            <p className={style.about}>{teacher.text}</p>
            <p className={style.price}>{teacher.price} грн/год</p>
            <button className={style.btn}>Зв'язатись з вчителем</button>
          {/* Render other relevant teacher details here */}
        </div>
      ))}
    </div>
  </div>
)}
        <button className={style.btn}>Редагувати профіль</button>
        <button className={style.btn} onClick={handleLogout}>Logout</button>
      </div>
      <Footer />
    </div>
  )
}

export default StudentProfile;
