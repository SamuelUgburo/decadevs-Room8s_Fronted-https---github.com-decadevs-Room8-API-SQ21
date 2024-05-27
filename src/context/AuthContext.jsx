import { jwtDecode } from 'jwt-decode';
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (token) => {
    // Decode token to get user info and roles
    const decodedUser = jwtDecode(token); 
    setUser(decodedUser);
    localStorage.setItem('token', token);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  const value = { user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
