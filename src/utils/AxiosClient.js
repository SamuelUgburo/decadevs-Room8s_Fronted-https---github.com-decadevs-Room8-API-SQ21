import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://localhost:7228/api'
});

export default axiosClient;
