// import React from 'react';
// import { useNavigate,Link } from 'react-router-dom';
// import { useAuth } from '../hooks/AuthContext';
// import TeacherProfileCard from '../components/teacherProfile/TeacherProfileCard';
// import Header from '../components/header/Header';
// import Footer from '../components/footer/Footer';
// import style from '../components/teacherPage/teacherPage.module.css';

// const TeacherDashboard = ({id, teacher}) => {
//   const navigate = useNavigate();
//   const { isAuthenticated, logout } = useAuth();

//   const handleLogout = () => {
//     logout();
//     navigate('/login'); // Redirect to login page after logout
//   };

//   if (!isAuthenticated) {
//     return <div>Please log in</div>;
//   }

//   return (
//     <>
//        <Header/>
//             <Link to={`/teachers/${id}`} className={style.register}>
//                 Мій профіль
//                 {teacher && <TeacherProfileCard id={id} />}
//             </Link>
//             <Footer/>
//       <button onClick={handleLogout}>Logout</button>
//     </>
//   );
// };

// export default TeacherDashboard;