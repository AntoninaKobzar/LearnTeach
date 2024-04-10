
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/AuthContext';
import { useNavigate } from 'react-router-dom';
import TeacherProfileCard from '../teacherCard/TeacherCard';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import style from './teacherPage.module.css';

const TeacherPage = ({id, teacher}) => {

    const navigate = useNavigate();
      const { isAuthenticated, logout } = useAuth();
    
      const handleLogout = () => {
        logout();
        navigate('/login'); 
      };
    
      if (!isAuthenticated) {
        return <div>Please log in</div>;
      }

    return (
        <>
            <Header/>
            <Link to={`/teachers/${id}`} className={style.register}>
                Мій профіль
                {teacher && <TeacherProfileCard id={id} />}
            </Link>
            <button>Редагувати</button>
            <button onClick={handleLogout}>Logout</button>
            <Footer/>
        </>
    );
}

export default TeacherPage;