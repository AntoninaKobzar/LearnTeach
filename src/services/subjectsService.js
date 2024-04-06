import axios from 'axios';
const baseUrl = '/api/subjects';

// Function to get a single subject by its ID
const getById = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to post a new subject
const post = async (subjectData) => {
  try {
    const response = await axios.post(baseUrl, subjectData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to get all subjects
const getAll = async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { getAll, getById, post };