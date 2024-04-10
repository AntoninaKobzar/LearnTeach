
import axios from 'axios';

const baseUrl = '/api/auth'; 

const register = async (formData) => {
  try {
    const formDataObj = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === 'photo') {
        if (formData[key] instanceof File) {
          formDataObj.append(key, formData[key], formData[key].name);
        }
      } else {
        formDataObj.append(key, formData[key]);
      }
    });

    const response = await axios.post(`${baseUrl}/users`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      body: JSON.stringify()
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error('Server responded with status code:', error.response.status);
      console.error('Response data:', error.response.data);
    } else if (error.request) {
      console.error('No response received from server');
    } else {
      console.error('Error setting up the request:', error.message);
    }
    throw error;
  }
};




const login = (username, password) => {
  return axios.post(`${baseUrl}/login`, { username, password })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error('Student login failed:', error);
      throw error;
    });
};

const getBySubject = async (subjectName) => {
  try {
    const response = await axios.get(`${baseUrl}/users?subject=${subjectName}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching teachers by subject:', error);
    throw error;
  }
};
const getBySubjectAndRole = async (subjectName) => {
  try {
    const response = await axios.get(`${baseUrl}/users`, {
      params: {
        subject: subjectName
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching users by subject and role:', error);
    throw error;
  }
};

export default {
  register,
login, getBySubject,getBySubjectAndRole
};