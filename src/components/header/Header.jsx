import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '../../assets/images/menu.svg';
import UserIcon from '../../assets/images/profile.svg';
import CloseIcon from '../../assets/images/close-1.svg';
import BurgerMenu from '../burgermenu/BurgerMenu';
import Modal from '../modal/Modal';
import Login from '../login/Login';
import style from './header.module.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProfile,setIsProfile]=useState(false);

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
            <Link to="/login"className={style.loginbtn}>Вхід</Link>
            <Link to="students/register" className={style.loginbtn}>Реєстрація учня</Link>
            <Link to="teacher/register"className={style.loginbtn}>Реєстрація вчителя</Link>
            </div>
            </div>}
           
        </div>
    );
};

export default Header;