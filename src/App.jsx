import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/mainPage/MainPage';
import  AuthProvider  from './hooks/AuthContext';
import NotFound from './components/NotFound';
import RegistrationComponent from './components/register/RegistrationComponent';
import LoginComponent from './components/login/LoginComponent';
import StudentProfile from './components/studentProfile/StudentProfile';
import TeacherProfile from './components/teacherProfile/TeacherProfile';
import "./App.css";



function App() {

  return (
    <AuthProvider>
    <Router>
      <Routes>
      <Route path="/" element={<MainPage />} />
          <Route path="/auth/login" element={<LoginComponent />} />
          <Route path="/auth/register" element={<RegistrationComponent />} />
          <Route path="/auth/login/student" element={<StudentProfile />} />
          <Route path="/auth/login/teacher" element={<TeacherProfile />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </AuthProvider>
  );
}

export default App;
