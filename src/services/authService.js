import axios from 'axios';
const baseUrl = '/api/users'; 

const register = async (formData) => {
  try {
    const response = await axios.post(`${baseUrl}/register`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    if (response.status === 201) {
      console.log('User registered successfully:', response.data);
      return response.data; // Return the response data if registration is successful
    } else {
      console.error('Unexpected status code during registration:', response.status);
      throw new Error('Unexpected status code during registration');
    }
  } catch (error) {
    console.error('Error registering user:', error);
    throw error; // Rethrow the error to handle it elsewhere, e.g., in the UI component
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




const login = async (email, password) => {
  try {
    const response = await axios.post(`${baseUrl}/login`, { email, password });

    const token = response.data.token;
    const user = response.data.user;

    if (!token) {
      throw new Error('Token not received. Please try again.');
    }

    console.log({token,user})
    return { token, user };
  } catch (error) {
    if (error.response && error.response.status === 401) {
      throw new Error('Invalid email or password. Please try again.');
    } else {
      throw new Error('An unexpected error occurred. Please try again later.');
    }
  }
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
const getBySubjectAndRole = async (subjectName) => {
  try {
    const response = await axios.get(`${baseUrl}`, {
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
login,
getById,
getBySubjectAndRole
};