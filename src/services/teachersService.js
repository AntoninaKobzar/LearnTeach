import axios from 'axios';

const baseUrl = 'http://localhost:3001/api';

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data).catch((error) => {
    console.error('Error fetching all teachers:', error);
    throw error; // Rethrow the error to handle it in the component
  });
};
const createTeacher = (newObject) => {
  const request = axios.post(`${baseUrl}/teachers`, newObject);
  return request.then((response) => response.data).catch((error) => {
    if (error.response && error.response.status === 409) {
      throw new Error('Email address is already registered.');
    } else {
      throw new Error('Failed to register teacher.');
    }
  });
};


const getById = (id) => {
  const request = axios.get(`${baseUrl}/teachers/${id}`);
  return request.then((response) => response.data)
  .catch((error) => {
    console.error('Error fetching teacher by ID:', error);
    throw error; // Rethrow the error to handle it in the component
  });
};

const teacherLogin = (username, password) => {
  return axios.post(`${baseUrl}/teachers`, { username, password })
    .then(response => {
      // Assuming the server returns user data including role upon successful login
      return response.data;
    })
    .catch(error => {
      console.error('Teacher login failed:', error);
      throw error; // Rethrow the error to handle it in the component
    });
};

export default {
  getAll,
  createTeacher,
  getById,
  teacherLogin,
};