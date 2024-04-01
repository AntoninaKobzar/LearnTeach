
import { Link } from 'react-router-dom';
import CloseIcon from '../../assets/images/close-1.svg'
import style from './burgermenu.module.css';

const BurgerMenu = ({ close }) => {
    return (
        <div className={style.menu}>
            <img className={style.close} src={CloseIcon} width="30" height="30" alt='close icon'onClick={close}/>
            <Link to="/" className={style.burgerbtn}>Головна</Link>
            <Link to="/login/student" className={style.burgerbtn}>Учню</Link>
            <Link to="/login/teacher" className={style.burgerbtn}>Вчителю</Link>
        </div>
    );
};

export default BurgerMenu;