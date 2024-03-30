import React, { useState, useEffect } from 'react';
import subjectService from '../../services/subjects';
import Header from '../header/Header'
import Footer from '../footer/Footer'
import style from './pupil.module.css'


const PupilPage = () => {
    const [subjects, setSubjects] = useState([])
    

    useEffect(() => {
        subjectService.getAll()
            .then(initialSubjects => { 
                setSubjects(initialSubjects);
            }).catch((error) => {
                
            })
    }, []);



    return (
        <>
            <Header />
            <h2 className={style.title}>Популярні предмети</h2>
            

            <ul className={style['subject-list']}>
                {Array.isArray(subjects) && subjects.length > 0 ? (
                    subjects.map(subject => (
                        <li className={style['subject-item']} key={subject.id}>{subject.name}</li>
                    ))
                ) : (
                    <li>No subjects found</li>
                )}
            </ul>
            <Footer />
        </>
    )
}

export default PupilPage;