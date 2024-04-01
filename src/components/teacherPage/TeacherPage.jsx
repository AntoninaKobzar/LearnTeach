import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TeacherRegistrationForm from '../form/TeacherRegistrationForm';
import Modal from '../modal/Modal';
import TeacherProfileCard from '../teacherProfile/TeacherProfileCard';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import style from './teacherPage.module.css';

const TeacherPage = ({id, teacher}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }; 

    return (
        <>
            <Header/>
            <Link to="teachers/register" className={style.register} onClick={toggleMenu}>
                Зареєструватися
                <Modal isOpen={isMenuOpen} onClose={toggleMenu}>
                <TeacherRegistrationForm close={toggleMenu}/>
                </Modal>
            </Link>
            
           
          
            <Link to={`/teachers/${id}`} className={style.register}>
                Мій профіль
                {teacher && <TeacherProfileCard id={id} />}
            </Link>
            <Footer/>
        </>
    );
}

export default TeacherPage;