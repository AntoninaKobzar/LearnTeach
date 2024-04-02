import axios from 'axios';

const baseUrl = 'http://localhost:3001'; 


const studentLogin = (username, password) => {
  return axios.post(`${baseUrl}/students`, { username, password })
    .then(response => {
      // Assuming the server returns user data including role upon successful login
      return response.data;
    })
    .catch(error => {
      console.error('Student login failed:', error);
      throw error; // Rethrow the error to handle it in the component
    });
};

const createStudent = (newObject) => {
  const request= axios.post(`${baseUrl}/students`, newObject);
return request
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
  createStudent,
  studentLogin,
};