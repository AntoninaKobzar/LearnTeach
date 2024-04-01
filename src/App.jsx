import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/mainPage/MainPage';
import PupilPage from './components/pupilPage/PupilPage'; 
import TeacherPage from './components/teacherPage/TeacherPage';
import TeacherRegistrationForm from './components/form/TeacherRegistrationForm';
import TeacherProfileCard from './components/teacherProfile/TeacherProfileCard';
import "./App.css";



function App() {
  return (
    
    <Router>
                <Routes>
                    <Route path="/" element={<MainPage/>} />
                    <Route path="/students" element={<PupilPage/>} />
                    <Route path="/teachers" element={<TeacherPage/>} />
                    <Route path="/register" element={<TeacherRegistrationForm />} />
                    <Route path="teachers/:id" element={<TeacherProfileCard />} />
                </Routes>
        </Router>
      
   
  );
}

export default App;
