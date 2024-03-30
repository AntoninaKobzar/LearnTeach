import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from '../mainPage/MainPage';
import PupilPage from '../pupilPage/PupilPage'; 
import TeacherPage from '../teacherPage/TeacherPage';

const Layout = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<MainPage/>} />
                    <Route path="/students" element={<PupilPage/>} />
                    <Route path="/teachers" element={<TeacherPage/>} />
                </Routes>
            </div>
        </Router>
    );
};

export default Layout;