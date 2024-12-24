import axios from 'axios';

const API_BASE_URL = 'http://backend:5000'; // Adjust this to match your Flask backend


export const fetchPodcasts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/podcasts`);
    return response.data;
  } catch (error) {
    console.error('Error fetching podcasts:', error);
    throw error;
  }
};