import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/AuthContext';

const TeacherDashboard = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login/teacher'); // Redirect to login page after logout
  };

  if (!isAuthenticated) {
    return <div>Please log in</div>;
  }

  return (
    <div>
      <h2>Student Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default TeacherDashboard;