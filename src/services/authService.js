////import axios from 'axios';

//const baseUrl = 'http://localhost:3001'; // Base URL of your API

// const teacherLogin = (username, password) => {
//   return axios.post(`${baseUrl}/login/teacher`, { username, password })
//     .then(response => {
//       // Assuming the server returns user data including role upon successful login
//       return response.data;
//     })
//     .catch(error => {
//       console.error('Teacher login failed:', error);
//       throw error; // Rethrow the error to handle it in the component
//     });
// };

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