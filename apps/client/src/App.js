import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PodcastPage from './pages/PodcastPage';
import Header from './components/ResponsiveAppBar';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/podcasts" element={<PodcastPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

