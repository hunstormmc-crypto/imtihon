import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MovieProvider } from './context/MovieContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import AllMovies from './pages/AllMovies';
import Admin from './pages/Admin';

function App() {
  return (
    <MovieProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-movies" element={<AllMovies />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </MovieProvider>
  );
}

export default App;
