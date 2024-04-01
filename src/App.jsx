import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/mainPage/MainPage';
import PupilPage from './components/pupilPage/PupilPage'; 
import TeacherPage from './components/teacherPage/TeacherPage';
import TeacherRegistrationForm from './components/form/TeacherRegistrationForm';
import TeacherProfileCard from './components/teacherProfile/TeacherProfileCard';
import RegisterStudent from './components/registerStudent/RegisterStudent'
import PupilProfile from './components/pupilProfile/PupilProfile';
import Login from './components/login/Login';
import "./App.css";



function App() {
  return (
    
    <Router>
                <Routes>
                    <Route path="/" element={<MainPage/>} />
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/login/student" element={<PupilPage/>} />
                    <Route path="/register" element={<RegisterStudent/>} />
                    <Route path="/student/:id" element={<PupilProfile/>} />
                    <Route path="/login/teacher" element={<TeacherPage/>} />
                    <Route path="/register" element={<TeacherRegistrationForm />} />
                    <Route path="/teachers/:id" element={<TeacherProfileCard />} />
                </Routes>
        </Router>
      
   
  );
}

export default App;
