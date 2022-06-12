import axios from 'axios';
import { api } from '../urlConfig';

const token = localStorage.getItem('token');

const axiosIntance = axios.create({
  baseURL: api,
  headers: {
    'authorization': token ? `${token}` : ''
  }
});

export default axiosIntance; 