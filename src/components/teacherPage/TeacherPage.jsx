import { useState } from 'react';
import {  Link } from 'react-router-dom';
import style from './teacherPage.module.css';
import TeacherRegistrationForm from '../form/TeacherRegistrationForm';
import Modal from '../modal/Modal';
import TeacherProfileCard from '../teacherProfile/TeacherProfileCard';
import Header from '../header/Header'
import Footer from '../footer/Footer'


const TeacherPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
      <Header/>
            <Link to="/register" className={style.register}>Зареєструватися
            <Modal isOpen={isMenuOpen} onClose={toggleMenu}>
                <TeacherRegistrationForm close={toggleMenu}/>
            </Modal></Link>
            <Link to="/:id" className={style.register}>Мій профіль</Link>
     <Footer/>
        </>
    );
}

export default TeacherPage;