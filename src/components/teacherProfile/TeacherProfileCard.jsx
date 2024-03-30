import teacherService from '../../services/teachers';
import React, { useState, useEffect } from 'react';

const TeacherProfileCard=()=>{
    const [teacher, setTeacher] = useState()
    console.log(teacher)

    useEffect(() => {
        teacherService.getById(id)
            .then(teacher => { 
                setTeacher(teacher);
            }).catch((error) => {
                
            })
    }, []);

    return(
        <>
        <p>Profile</p>
        {teacher}
        </>
    )
}
export default TeacherProfileCard