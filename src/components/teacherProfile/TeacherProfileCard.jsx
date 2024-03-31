import teacherService from '../../services/teachers';
import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'

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
        {<Link to={`/teachers/${id}`}>{teacher}</Link>}
        </>
    )
}
export default TeacherProfileCard