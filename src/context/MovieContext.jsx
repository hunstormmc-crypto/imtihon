import React, { createContext, useState, useEffect } from 'react';
import { initialMovies } from '../data/movies';

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  // Load movies from localStorage on mount
  useEffect(() => {
    const savedMovies = localStorage.getItem('movies');
    
    if (savedMovies) {
      // localStorage'da ma'lumot bor - uni yuklash (qo'shilgan + o'chirmalar saqlanadi)
      setMovies(JSON.parse(savedMovies));
    } else {
      // Birinchi marta - initialMovies'ni yuklash
      setMovies(initialMovies);
      localStorage.setItem('movies', JSON.stringify(initialMovies));
    }
  }, []);

  // Save movies to localStorage whenever they change
  useEffect(() => {
    if (movies.length > 0) {
      localStorage.setItem('movies', JSON.stringify(movies));
    }
  }, [movies]);

  const addMovie = (newMovie) => {
    const movie = {
      ...newMovie,
      id: Math.max(...movies.map(m => m.id), 0) + 1
    };
    setMovies([...movies, movie]);
  };

  const deleteMovie = (id) => {
    setMovies(movies.filter(m => m.id !== id));
  };

  const getMovieById = (id) => {
    return movies.find(m => m.id === parseInt(id));
  };

  const login = (username, password) => {
    if (username === 'admin' && password === '1234') {
      setIsAdmin(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAdmin(false);
  };

  return (
    <MovieContext.Provider value={{
      movies,
      addMovie,
      deleteMovie,
      getMovieById,
      isAdmin,
      login,
      logout
    }}>
      {children}
    </MovieContext.Provider>
  );
};
