import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/mainPage/MainPage';
import  AuthProvider  from './hooks/AuthContext';
import NotFound from './components/NotFound';
import RegistrationComponent from './components/RegistrationComponent';
import LoginComponent from './components/LoginComponent';
import "./App.css";
// import TeacherRegistrationForm from './components/form/TeacherRegistrationForm';
// import RegisterStudent from './components/registerStudent/RegisterStudent'
// import Login from './components/login/Login';
// import StudentDashboard from './components/pupilPage/StudentDashboard';
// import TeacherDashboard from './components/TeacherDashboard';
// import TeacherProfileCard from './components/teacherProfile/TeacherProfileCard';



function App() {

  return (
    <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/auth/login" element={<LoginComponent />} />
        {/* <Route path="/student" element={<StudentDashboard />} /> */}
        {/* <Route path="/teacher" element={<TeacherDashboard />} /> */}
        <Route path="/auth/register" element={<RegistrationComponent />} />
        {/* <Route path="/teachers" element={<TeacherRegistrationForm />} /> */}
        {/* <Route path="/teachers/:id" element={<TeacherProfileCard />}/> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </AuthProvider>
    // <Router>
    //             <Routes>
    //                 <Route path="/" element={<MainPage/>} />
    //                 <Route path="/login" element={<Login/>}/>
    //                 <Route path="/login/student" element={<PupilPage/>} />
    //                 <Route path="/login/teacher" element={<TeacherPage/>} />
    //                 <Route path="/students" element={<RegisterStudent/>} />
    //                 <Route path="/teachers" element={<TeacherRegistrationForm />} />
    //                 <Route path="/student/:id" element={<PupilProfile/>} />
    //                 <Route path="/teachers/:id" element={<TeacherProfileCard />} />
    //             </Routes>
    //     </Router>
      
   
  );
}

export default App;
