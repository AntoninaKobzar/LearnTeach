
import axios from 'axios';

const baseUrl = '/api/auth'; 

const register = async (formData) => {
  const formDataObj = new FormData();
  // Convert formData object to FormData
  Object.keys(formData).forEach((key) => {
    if (key === 'photo') {
      if (formData[key] instanceof File) {
        formDataObj.append(key, formData[key], formData[key].name);
      }
    } else {
      formDataObj.append(key, formData[key]);
    }
  });

  try {
    const response = await axios.post(`${baseUrl}/register/upload-photo`, formDataObj, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log('Photo uploaded successfully', response.data.photoUrl);
    // return response.data;
  } catch (error) {
    console.error('Error uploading photo:', error);
  }
};

const getById = async (userId) => {
  try {
    const response = await axios.get(`${baseUrl}/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user by ID:', error);
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

// const getBySubject = async (subjectName) => {
//   try {
//     const response = await axios.get(`${baseUrl}?subjects=${subjectName}`);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching teachers by subject:', error);
//     throw error;
//   }
// };
// const getBySubjectAndRole = async (subjectName) => {
//   try {
//     const response = await axios.get(`${baseUrl}`, {
//       params: {
//         subject: subjectName
//       }
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching users by subject and role:', error);
//     throw error;
//   }
// };

export default {
register,
login,
getById
};