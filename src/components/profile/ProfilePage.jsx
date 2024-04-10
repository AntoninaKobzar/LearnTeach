// import authService from '../../services/authService';
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import style from './profilePage.module.css';
// import TeacherProfile from '../teacherProfile/TeacherProfile';
// import StudentProfile from '../studentProfile/StudentProfile';

// const ProfilePage = () => {
//     const { id } = useParams();
//     const [user, setUser] = useState();
//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(() => {
//         authService.getById(id)
//             .then(user => { 
//                 setUser(user);
//                 setIsLoading(false);
//             }).catch((error) => {
//                 console.error("Error fetching user data:", error);
//                 setIsLoading(false);
//             });
//     }, [id]);

//     if (isLoading) {
//         return <div>Loading...</div>;
//     }

//     if (!user) {
//         return <div>User not found</div>;
//     }

//     return (
//         <>
//             {user.role === 'teacher' && <TeacherProfile teacher={user} />}
//             {user.role === 'student' && <StudentProfile student={user} />}
//         </>
//     );
// };

// export default ProfilePage;
