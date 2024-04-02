import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    // Perform authentication logic (e.g., validate credentials)
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Perform logout logic (e.g., clear session)
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
export const useAuth = () => useContext(AuthContext);