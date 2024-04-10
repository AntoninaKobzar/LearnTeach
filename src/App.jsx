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
        <Route path="/student" element={<StudentPage />} /> 
         <Route path="/teacher" element={<TeacherPage />} />
        <Route path="/auth/users" element={<RegistrationComponent />} />
        {/* <Route path="/teachers" element={<TeacherRegistrationForm />} /> */}
        {/* <Route path="/teachers/:id" element={<TeacherProfileCard />}/> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </AuthProvider>
  );
}

export default App;
