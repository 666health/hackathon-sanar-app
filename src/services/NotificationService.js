import axios from 'axios';

const API_URL = 'https://us-central1-health-hackaton.cloudfunctions.net/api';

const setPushToken = token =>
  axios.post(
    `${API_URL}/users/push`,
    { pushToken: token },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }
  );

export default {
  setPushToken
};
