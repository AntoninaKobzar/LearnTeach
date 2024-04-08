
import axios from 'axios';

const baseUrl = '/api/auth'; 

const register = async (formData) => {
  try {
    const formDataObj = new FormData(); // Create a FormData object

    // Append all form fields to the FormData object
    Object.keys(formData).forEach((key) => {
      if (key === 'photo') {
        // Check if photo exists in the formData
        if (formData[key] instanceof File) {
          // Append the file to the FormData object
          formDataObj.append(key, formData[key], formData[key].name);
        }
      } else {
        formDataObj.append(key, formData[key]);
      }
    });

    const response = await axios.post(`${baseUrl}/register`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data' // Set content type to multipart/form-data for file upload
      },
      body: JSON.stringify()
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      console.error('Server responded with status code:', error.response.status);
      console.error('Response data:', error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('No response received from server');
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error setting up the request:', error.message);
    }
    throw error;
  }
};




// const studentLogin = (username, password) => {
//   return axios.post(`${baseUrl}/login/student`, { username, password })
//     .then(response => {
//       // Assuming the server returns user data including role upon successful login
//       return response.data;
//     })
//     .catch(error => {
//       console.error('Student login failed:', error);
//       throw error; // Rethrow the error to handle it in the component
//     });
// };

export default {
  register,

};