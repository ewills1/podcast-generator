import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PodcastPage from './pages/PodcastPage';
import Header from './components/ResponsiveAppBar';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/podcasts" element={<PodcastPage />} />
      </Routes>
    </Router>
  );
}

export default App;

