import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '../../assets/images/menu.svg';
import UserIcon from '../../assets/images/profile.svg';
import CloseIcon from '../../assets/images/close-1.svg';
import BurgerMenu from '../burgermenu/BurgerMenu';
import Modal from '../modal/Modal';
import RegistrationComponent from '../register/RegistrationComponent';
import LoginComponent from '../login/LoginComponent';
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
            <Modal className={style.modal} isOpen={isMenuOpen} onClose={toggleMenu}>
                <BurgerMenu close={toggleMenu}/>
            </Modal>
            <p className={style.logo}>ВчусяВчу</p>
            <div className={style.menubtns}>
            <Link to="/" className={style.mainbtn}>Головна</Link>
            <Link to="/users/student" className={style.mainbtn}>Учню</Link>
            <Link to="/users/teacher" className={style.mainbtn}>Вчителю</Link>
            <Link to="/users/login"className={style.mainbtn}>Вхід</Link>
            <Link to="/users/register" className={style.mainbtn} onClick={toggleModal}>Реєстрація</Link>
            </div>
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
            <Link to="/users/login"className={style.loginbtn}>Вхід
            <Modal className={style.modal} isOpen={isModalOpen} onClose={toggleModal}>
                <LoginComponent close={toggleModal}/>
                </Modal></Link>
            <Link to="/users/register" className={style.loginbtn} onClick={toggleModal}>Реєстрація
            <Modal isOpen={isModalOpen} onClose={toggleModal}>
                <RegistrationComponent close={toggleModal}/>
                </Modal></Link>
            </div>
            </div>}
           
        </div>
    );
};

export default Header;