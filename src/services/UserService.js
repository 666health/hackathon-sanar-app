import axios from 'axios';

const API_URL = 'https://us-central1-health-hackaton.cloudfunctions.net/api';

const login = (email, password) =>
  axios.post(`${API_URL}/users/login`, {
    email,
    password
  });
const register = (name, email, password) =>
  axios.post(`${API_URL}/users/register`, {
    name,
    email,
    password
  });

export default {
  login,
  register
};
