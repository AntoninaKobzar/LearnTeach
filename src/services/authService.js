import axios from 'axios';

const baseUrl = '/api/auth';

const register = async (userData) => {
  try {
    const formData = new FormData();
    Object.keys(userData).forEach((key) => {
      if (key === 'photo') {
        formData.append('photo', userData[key]);
      } else {
        formData.append(key, userData[key]);
      }
    });

    const response = await axios.post(`${baseUrl}/register`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default { register };


// import axios from 'axios';

// const baseUrl = '/api/auth'; 

// const register = async (userData) => {
//   try {
//     const response = await axios.post(`${baseUrl}/register`, userData);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

// export default { register };

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

// export default {
//   teacherLogin,
//   studentLogin
// };