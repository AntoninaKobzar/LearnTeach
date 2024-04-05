import axios from 'axios';

const baseUrl = '/api';

const getAll = () => {
  const request = axios.get(`${baseUrl}/teachers`);
  return request.then((response) => response.data).catch((error) => {
    console.error('Error fetching all teachers:', error);
    throw error; 
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
    throw error;
  });
};

const teacherLogin = (username, password, role) => {
  return axios.post(`${baseUrl}/teachers`, { username, password, role })
    .then(response => {
      if(role==='teacher'){

        return response.data;
      }
    })
    .catch(error => {
      console.error('Teacher login failed:', error);
      throw error;
    });
};

export default {
  getAll,
  createTeacher,
  getById,
  teacherLogin,
};