import axios from 'axios';

const instance = axios.create({
  //API URL
  baseUrl: 'http://localhost:5001/clone-6673c/us-central1/api',
});

export default instance;
