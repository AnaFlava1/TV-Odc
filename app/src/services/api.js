import axios from 'axios';

const api = axios.create({
  baseURL: 'https://tvodc.herokuapp.com',
});

export default api;
