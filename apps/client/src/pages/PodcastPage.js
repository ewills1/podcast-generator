import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import PodcastPaper from '../components/PodcastPaper';

function PodcastPage() {
  const [podcasts, setPodcasts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch podcast data from Flask API
    fetch('http://127.0.0.1:5000/api/podcasts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch podcasts');
        }
        return response.json();
      })
      .then((data) => {
        setPodcasts(data); // Update state with podcast data
      })
      .catch((err) => {
        setError(err.message); // Set error state if fetch fails
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (podcasts.length === 0) {
    return <div>Loading podcasts...</div>;
  }

  return (
    <Container sx={{ marginTop: '2rem' }}>
      {podcasts.map((podcast, index) => (
        <PodcastPaper key={index} podcast={podcast} />
      ))}
    </Container>
  );
}

export default PodcastPage;
