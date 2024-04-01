import axios from 'axios'
const baseUrl = 'http://localhost:3001/subjects'

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};


  


// const create = newObject => {
//   const request = axios.post(baseUrl, newObject)
//   return request.then(response => response.data)
// }

// const updateSubject = (id, newObject) => {
//   const request = axios.put(`${baseUrl}/${id}`, newObject)
//   return request.then(response => response.data)
// }
// const deleteSubject = (id) => {
//     const request = axios.delete(`${baseUrl}/${id}`);
//     return request.then((response) => response.data);
//   };

export default { 
  getAll,
//   create,deleteSubject,updateSubject
}