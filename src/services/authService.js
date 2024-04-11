
import axios from 'axios';

const baseUrl = '/api/auth'; 

const register = async (formData) => {
  try {
    const response = await axios.post(`${baseUrl}/register`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log('User registered successfully:', response.data);
    // return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

// const register = async (formData) => {
//   const formDataObj = new FormData();
//   formDataObj.append('username', formData.username);
//   formDataObj.append('email', formData.email);
//   formDataObj.append('password', formData.password);
//   formDataObj.append('role', formData.role);
//   formDataObj.append('photo', formData.photo); // Append photo directly
//   formDataObj.append('info', JSON.stringify(formData.info));

//   try {
//     const response = await axios.post(`${baseUrl}/register`, formDataObj, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//     });

//     console.log('Photo uploaded successfully', response.data.photoUrl);
//     // return response.data;
//   } catch (error) {
//     console.error('Error uploading photo:', error);
//     throw error;
//   }
// };


const getById = async (userId) => {
  try {
    const response = await axios.get(`${baseUrl}/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user by ID:', error);
    throw error;
  }
};




const login = (email, password, role) => { 
  return axios.post(`${baseUrl}/login`, { email, password, role }) 
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