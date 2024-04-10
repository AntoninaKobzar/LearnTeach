import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/mainPage/MainPage';
import  AuthProvider  from './hooks/AuthContext';
import NotFound from './components/NotFound';
import RegistrationComponent from './components/register/RegistrationComponent';
import LoginComponent from './components/login/LoginComponent';
import StudentPage from './components/studentPage/StudentPage';
import TeacherPage from './components/teacherPage/TeacherPage';
import "./App.css";


function App() {

  return (
    <AuthProvider>
    <Router>
      <Routes>
      <Route path="/" element={<MainPage />} />
          <Route path="/auth/login" element={<LoginComponent />} />
          <Route path="/auth/register" element={<RegistrationComponent />} />
          <Route path="/auth/student" element={<StudentPage />} />
          <Route path="/auth/teacher" element={<TeacherPage />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </AuthProvider>
  );
}

export default App;
