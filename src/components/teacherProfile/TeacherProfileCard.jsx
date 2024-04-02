import teacherService from '../../services/teachersService';
import React, { useState, useEffect } from 'react';

const TeacherProfileCard = ({ id }) => {
    const [teacher, setTeacher] = useState();

    useEffect(() => {
        teacherService.getById(id)
            .then(teacher => { 
                setTeacher(teacher);
                console.log({teacher})
            }).catch((error) => {
                console.error("Error fetching teacher data:", error);
            });
    }, [id]);

    return (
        <>
            {teacher && (
                <>
                    <p>Name: {teacher.name}</p>
                    <img src={teacher.photo} width='150px' alt='teacher-photo'/>
                    {/* <p>Email: {teacher.email}</p>
                    <p>Subjects: {teacher.info.subjects.map(subject=>(
                        <li key={subject.id}>{subject}</li>
                    ))}</p>
                    <p>Education: {teacher.info.education}</p>
                    <p>Experience: {teacher.info.experience ? teacher.info.experience + ' years' : 'Not specified'}</p>
                    <p>Price: ${teacher.info.price}</p>
                    <p>Online Teaching: {teacher.info.online ? 'Yes' : 'No'}</p>
                    <p>Offline Teaching: {teacher.info.offline ? 'Yes' : 'No'}</p>
                    <p>About: {teacher.info.text}</p> */}
                </>
            )}
        </>
    );
};

export default TeacherProfileCard;