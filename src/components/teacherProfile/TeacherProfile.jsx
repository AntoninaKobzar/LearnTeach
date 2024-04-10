import React from 'react';
import style from './teacherProfile.module.css';

const TeacherProfile = ({ teacher }) => {
    return (
        <div className={style.card}>
            {teacher && (
                <>
            {teacher.photo && <img src={teacher.photo} className={style.photo} width='150px' alt='teacher-photo'/>}
            <p className={style.name}>{teacher.name}</p>
            <p className={style.subjects}></p>
                <ul>
                {teacher.info.subjects.map(subject=>(
                    <li className={style.subject} key={subject.id}>{subject}</li>
                ))} 
            </ul>
            <p className={style.education}>Освіта: {teacher.info.education}</p>
            <p className={style.experience}>Досвід: {teacher.info.experience ? teacher.info.experience + ' years' : 'Not specified'}</p>
            <p className={style.online}>Онлайн: {teacher.info.online ? 'Так' : 'Ні'}</p>
            <p className={style.offline}>Офлайн: {teacher.info.offline ? 'Так' : 'Ні'}</p>
            <p className={style.about}>{teacher.info.text}</p>
            <p className={style.price}>{teacher.info.price} грн/год</p>
            <button className={style.btn}>Зв'язатись з вчителем</button>
        </>
        )}
        </div>
    );
};

export default TeacherProfile;