import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '../../assets/images/menu.svg';
import UserIcon from '../../assets/images/profile.svg';
import CloseIcon from '../../assets/images/close-1.svg';
import BurgerMenu from '../burgermenu/BurgerMenu';
import Modal from '../modal/Modal';
import RegistrationComponent from '../register/RegistrationComponent';
import LoginComponent from '../login/LoginComponent';
// import TeacherRegistrationForm from '../form/TeacherRegistrationForm';
// import RegisterStudent from '../registerStudent/RegisterStudent';

// import Login from '../login/Login';
import style from './header.module.css';

const Header = () => {
    const [isProfile,setIsProfile]=useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsMenuOpen(!isMenuOpen);
    }; 

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const toggleProfile = () => {
        setIsProfile(!isProfile);
    };

    return (
        <div className={style.header}>
            <button onClick={toggleMenu} className={style.menubtn}>
                <img className={style.menuicon} src={MenuIcon} width="30" height="30" alt='burger menu icon'/>
            </button>
            <Modal isOpen={isMenuOpen} onClose={toggleMenu}>
                <BurgerMenu close={toggleMenu}/>
            </Modal>
            <p className={style.logo}>ВчусяВчу</p>
            {(!isProfile)?
            <button className={style.userbtn} onClick={toggleProfile}>
                <img className={style.usericon} src={UserIcon} width="30" height="30" alt='user icon'/>
            </button>
            :
                <div className={style.login}>
            <button className={style.closebtn} onClick={toggleProfile}>
                <img className={style.closeicon} src={CloseIcon} width="30" height="30" alt='close icon'/>
            </button>
            <div className={style.loginbtns}>
            <Link to="/auth/login"className={style.loginbtn}>Вхід
            <Modal isOpen={isModalOpen} onClose={toggleModal}>
                <LoginComponent close={toggleModal}/>
                </Modal></Link>
            <Link to="/auth/users" className={style.loginbtn} onClick={toggleModal}>Реєстрація учня
            <Modal isOpen={isModalOpen} onClose={toggleModal}>
                <RegistrationComponent close={toggleModal}/>
                </Modal></Link>
            {/* <Link to="/teachers"className={style.loginbtn} onClick={toggleModal}>Реєстрація вчителя
                <Modal isOpen={isModalOpen} onClose={toggleModal}>
                <TeacherRegistrationForm close={toggleModal}/>
                </Modal></Link> */}
            </div>
            </div>}
           
        </div>
    );
};

export default Header;