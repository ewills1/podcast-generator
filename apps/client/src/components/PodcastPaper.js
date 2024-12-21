import React from 'react';
import { Paper, Typography, Box } from '@mui/material';

const PodcastPaper = ({ podcast }) => (
  <Paper elevation={3} sx={{ padding: '1rem', margin: '1rem' }}>
    <Typography variant="h5">{podcast.title}</Typography>
    <Typography variant="body2" color="text.secondary">
      {podcast.description}
    </Typography>
    <Box sx={{ marginTop: '1rem' }}>
      <Typography variant="caption">Published: {podcast.published}</Typography>
      <a href={podcast.audioUrl} style={{ textDecoration: 'none', marginLeft: '1rem' }}>
        Listen Now
      </a>
    </Box>
  </Paper>
);

export default PodcastPaper;

