import axios from 'axios';

const baseUrl = 'http://localhost:3001/teachers';

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data).catch((error) => {
    console.error('Error fetching all teachers:', error);
    throw error; // Rethrow the error to handle it in the component
  });
};

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request.then((response) => response.data).catch((error) => {
    console.error('Error creating teacher:', error);
    throw error; // Rethrow the error to handle it in the component
  });
};

const getById = (id) => {
  const request = axios.get(`${baseUrl}/${id}`);
  return request.then((response) => response.data).catch((error) => {
    console.error('Error fetching teacher by ID:', error);
    throw error; // Rethrow the error to handle it in the component
  });
};

export default {
  getAll,
  create,
  getById,
};