import teacherService from '../../services/teachers';
import React, { useState, useEffect } from 'react';
// import {Link} from 'react-router-dom'

const TeacherProfileCard=()=>{
    const [teacher, setTeacher] = useState()
    console.log(teacher.name)

    useEffect(() => {
        teacherService.getById(id)
            .then(teacher => { 
                setTeacher(teacher);
                console.log(teacher)
            }).catch((error) => {
                
            })
    }, []);

    return(
        <>
        <p>Profile</p>
        <p>{teacher.name}</p>
        <img src={teacher.photo} width='150px' alt='teacher-photo'/> 
        {/* {<Link to={`/teachers/${id}`}>{teacher}</Link>} */}
        </>
    )
}
export default TeacherProfileCard