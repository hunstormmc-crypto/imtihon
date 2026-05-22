import React, { createContext, useState, useEffect } from 'react';
import { initialMovies } from '../data/movies';

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [language, setLanguage] = useState('uz');

  // Load user session from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
      setIsLoggedIn(true);
    }
  }, []);

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
    setIsLoading(false);
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

  const userLogin = (email, password) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      setCurrentUser(user);
      setIsLoggedIn(true);
      localStorage.setItem('currentUser', JSON.stringify(user));
      return { success: true };
    }
    return { success: false, message: 'Email yoki parol noto\'g\'ri' };
  };

  const userRegister = (name, email, password) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.find(u => u.email === email)) {
      return { success: false, message: 'Bu email allaqachon ro\'yxatdan o\'tgan' };
    }
    const newUser = { id: Date.now(), name, email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    setCurrentUser(newUser);
    setIsLoggedIn(true);
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    return { success: true };
  };

  const logout = () => {
    setIsAdmin(false);
  };

  const userLogout = () => {
    setCurrentUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem('currentUser');
  };

  return (
    <MovieContext.Provider value={{
      movies,
      addMovie,
      deleteMovie,
      getMovieById,
      isAdmin,
      isLoggedIn,
      currentUser,
      isLoading,
      login,
      logout,
      userLogin,
      userRegister,
      userLogout,
      searchTerm,
      setSearchTerm,
      language,
      setLanguage
    }}>
      {children}
    </MovieContext.Provider>
  );
};
