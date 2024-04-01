import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import subjectService from '../../services/subjects';
import teacherService from '../../services/teachers';
import style from './pupil.module.css'
import Header from '../header/Header'
import Footer from '../footer/Footer'

const PupilPage = () => {
    const [subjects, setSubjects] = useState([]);
    const [selectedSubject, setSelectedSubject] = useState(null);
    const [teachersWithSubject, setTeachersWithSubject] = useState([]);

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
        <>
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
            <Footer/> 
        </>
    );
}

export default PupilPage;