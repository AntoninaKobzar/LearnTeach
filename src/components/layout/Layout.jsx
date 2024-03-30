import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from '../mainPage/MainPage';
import PupilPage from '../pupilPage/PupilPage'; 
import TeacherPage from '../teacherPage/TeacherPage';
import TeacherRegistrationForm from '../form/TeacherRegistrationForm';
import TeacherProfileCard from '../teacherProfile/TeacherProfileCard';

const Layout = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<MainPage/>} />
                    <Route path="/students" element={<PupilPage/>} />
                    <Route path="/teachers" element={<TeacherPage/>} >
                    <Route path="/teachers/register" element={<TeacherRegistrationForm />} />
                    <Route path="/teachers/:id" element={<TeacherProfileCard />} />
                    </Route>
                </Routes>
            </div>
        </Router>
    );
};

export default Layout;