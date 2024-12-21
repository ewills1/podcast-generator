import axios from 'axios';

const API_BASE_URL = 'http://localhost:127.0.0.1:5000'; // Adjust this to match your Flask backend

export const fetchPodcasts = async () => {
  const response = await axios.get(`${API_BASE_URL}/api/podcasts`);
  return response.data;
};
