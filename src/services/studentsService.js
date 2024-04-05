import axios from 'axios';

const baseUrl = '/api'; 


const studentLogin = (username, password,role) => {
  return axios.post(`${baseUrl}/students`, { username, password,role })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error('Student login failed:', error);
      throw error;
    });
};

const createStudent = (newObject) => {
  const request= axios.post(`${baseUrl}/students`, newObject);
return request
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error('Error registering:', error);
      throw error;
    });
};

export default {
  createStudent,
  studentLogin,
};