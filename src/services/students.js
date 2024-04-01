import axios from 'axios';

const baseUrl = 'http://localhost:3001/students'; 

const login = (username, password) => {
  return axios.post(`${baseUrl}/login`, { username, password })
    .then(response => {
      // Assuming the server returns user data including role upon successful login
      return response.data;
    })
    .catch(error => {
      console.error('Error logging in:', error);
      throw error; // Rethrow the error to handle it in the component
    });
};

const register = (userData) => {
  return axios.post(`${baseUrl}/register`, userData)
    .then(response => {
      // Assuming the server returns user data upon successful registration
      return response.data;
    })
    .catch(error => {
      console.error('Error registering:', error);
      throw error; // Rethrow the error to handle it in the component
    });
};

export default {
  login,
  register
};