// import teachersService from '../../services/teachersService';
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import style from './teacherProfile.module.css';

// const TeacherProfileCard = () => {
//     const { id } = useParams();
//     const [teacher, setTeacher] = useState();

//     useEffect(() => {
//         teachersService.getById(id)
//             .then(teacher => { 
//                 setTeacher(teacher);
//                 console.log(teacher)
//             }).catch((error) => {
//                 console.error("Error fetching teacher data:", error);
//             });
//     }, [id]);

//     return (
//         <>
//             {teacher && (
//                 <div className={style.card}>
//                     {teacher.photo && <img src={teacher.photo} className={style.photo} width='150px' alt='teacher-photo'/>}
//                     <p className={style.name}>{teacher.name}</p>
//                     <p className={style.subjects}></p>
//                         <ul>
//                         {teacher.info.subjects.map(subject=>
//                          <li className={style.subject} key={subject.id}>{subject}</li>
//                         )} 
//                     </ul>
//                     <p className={style.education}>Освіта: {teacher.info.education}</p>
//                     <p className={style.experience}>Досвід: {teacher.info.experience ? teacher.info.experience + ' years' : 'Not specified'}</p>
//                     <p className={style.online}>Онлайн: {teacher.info.online ? 'Так' : 'Ні'}</p>
//                     <p className={style.offline}>Офлайн: {teacher.info.offline ? 'Так' : 'Ні'}</p>
//                     <p className={style.about}>{teacher.info.text}</p>
//                     <p className={style.price}>{teacher.info.price} грн/год</p>
//                     <button className={style.btn}>Зв'язатись з вчителем</button>
//                 </div>
//             )}
//         </>
//     );
// };

// export default TeacherProfileCard;