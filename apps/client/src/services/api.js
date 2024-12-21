import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:5000/api/podcasts'; // Adjust this to match your Flask backend


export const fetchPodcasts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/podcasts`);
    return response.data;
  } catch (error) {
    console.error('Error fetching podcasts:', error);
    throw error;
  }
};