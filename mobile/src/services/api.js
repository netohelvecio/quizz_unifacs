import axios from 'axios';

const api = axios.create({
  baseURL: 'https://quiz-unifacs.herokuapp.com/',
});

export default api;
