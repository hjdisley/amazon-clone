import axios from 'axios';

const instance = axios.create({
  //API URL
  baseUrl: '...',
});

export default instance;
