import React from 'react';

const PodcastCard = ({ podcast }) => {
  return (
    <div>
      <h2>{podcast.title}</h2>
      <p>{podcast.description}</p>
      <audio controls>
        <source src={podcast.audioUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default PodcastCard;
