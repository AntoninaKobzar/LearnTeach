
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/AuthContext';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import subjectService from '../../services/subjectsService';
import teacherService from '../../services/teachersService';
import Header from '../header/Header'
import Footer from '../footer/Footer'
import style from './student.module.css'

const StudentDashboard = () => {
    const [subjects, setSubjects] = useState([]);
    const [selectedSubject, setSelectedSubject] = useState(null);
    const [teachersWithSubject, setTeachersWithSubject] = useState([]);
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login'); // Redirect to login page after logout
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
        const teachers = await teacherService.getBySubject(selectedSubject.name);
        setTeachersWithSubject(teachers);
    } catch (error) {
        console.error('Error fetching teachers with subject:', error);
    }
};

  return (
    <div>
      <h2>Student Dashboard</h2>
      <Header/>
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
                    <h2>Teachers who teach {selectedSubject.name}</h2>
                    <ul>
                        {teachersWithSubject.map(teacher => (
                            <li key={teacher.id}>
                                <Link to={`/teachers/${teacher.id}`}>{teacher.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
      <p>Редагувати профіль</p>
      <button onClick={handleLogout}>Logout</button>
      <Footer/> 
    </div>
  );
};

export default StudentDashboard;