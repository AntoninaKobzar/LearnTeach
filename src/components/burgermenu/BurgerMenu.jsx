
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import style from './burgermenu.module.css';

const BurgerMenu = ({ close }) => {
    return (
        <div className={style.menu}>
            <FontAwesomeIcon className={style.close} icon={faTimes} onClick={close} />
            <Link to="/" className={style.burgerbtn}>Головна</Link>
            <Link to="/students" className={style.burgerbtn}>Учню</Link>
            <Link to="/teachers" className={style.burgerbtn}>Вчителю</Link>
        </div>
    );
};

export default BurgerMenu;