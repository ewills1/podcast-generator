import React, { useEffect, useState } from 'react';
import { fetchPodcasts } from '../services/api';
import PodcastCard from '../components/PodcastCard';

const PodcastPage = () => {
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    fetchPodcasts().then(setPodcasts).catch(console.error);
  }, []);

  return (
    <div>
      <h1>Podcasts</h1>
      <div>
        {podcasts.map((podcast, index) => (
          <PodcastCard key={index} podcast={podcast} />
        ))}
      </div>
    </div>
  );
};

export default PodcastPage;
