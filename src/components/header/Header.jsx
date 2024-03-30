import React, { useState } from 'react';
import style from './header.module.css';
import MenuIcon from '../../assets/images/menu.png';
import BurgerMenu from '../burgermenu/BurgerMenu';
import Modal from '../modal/Modal';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={style.header}>
            <p className={style.logo}>ВчусяВчу</p>
            <button onClick={toggleMenu} className={style.menubtn}>
                <img className={style.menuicon} src={MenuIcon} width="30" height="30" alt='burger menu icon'/>
            </button>
            <Modal isOpen={isMenuOpen} onClose={toggleMenu}>
                <BurgerMenu close={toggleMenu}/>
            </Modal>
        </div>
    );
};

export default Header;