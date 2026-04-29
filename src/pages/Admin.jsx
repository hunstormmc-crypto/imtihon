import React, { useContext, useState } from 'react';
import { MovieContext } from '../context/MovieContext';

const Admin = () => {
  const { isAdmin, login, logout, movies, addMovie, deleteMovie, searchTerm, language } = useContext(MovieContext);

  const translations = {
    uz: {
      adminLogin: 'Admin Login',
      username: 'Username',
      password: 'Password',
      login: 'Login',
      defaultAdmin: 'default admin:admin  parol:1234',
      adminPanel: 'Admin Panel',
      logout: 'Logout',
      addNewMovie: '+ Add New Movie',
      cancel: 'Cancel',
      addNewMovieTitle: 'Add New Movie',
      title: 'Title',
      year: 'Year',
      budget: 'Budget',
      imageUrl: 'Image URL',
      description: 'Description',
      addMovie: 'Add Movie',
      totalMovies: 'Jami kinolar soni',
      delete: 'Delete',
      movieTitle: 'Movie title',
      enterUsername: 'Enter username',
      enterPassword: 'Enter password',
      fillFields: 'Please fill in all fields',
      added: 'Movie added successfully!',
      confirmDelete: 'Delete',
    },
    en: {
      adminLogin: 'Admin Login',
      username: 'Username',
      password: 'Password',
      login: 'Login',
      defaultAdmin: 'default admin:admin  password:1234',
      adminPanel: 'Admin Panel',
      logout: 'Logout',
      addNewMovie: '+ Add New Movie',
      cancel: 'Cancel',
      addNewMovieTitle: 'Add New Movie',
      title: 'Title',
      year: 'Year',
      budget: 'Budget',
      imageUrl: 'Image URL',
      description: 'Description',
      addMovie: 'Add Movie',
      totalMovies: 'Total movies count',
      delete: 'Delete',
      movieTitle: 'Movie title',
      enterUsername: 'Enter username',
      enterPassword: 'Enter password',
      fillFields: 'Please fill in all fields',
      added: 'Movie added successfully!',
      confirmDelete: 'Delete',
    },
    ru: {
      adminLogin: 'Вход для админа',
      username: 'Имя пользователя',
      password: 'Пароль',
      login: 'Войти',
      defaultAdmin: 'по умолчанию admin:admin  пароль:1234',
      adminPanel: 'Панель админа',
      logout: 'Выйти',
      addNewMovie: '+ Добавить новый фильм',
      cancel: 'Отмена',
      addNewMovieTitle: 'Добавить новый фильм',
      title: 'Название',
      year: 'Год',
      budget: 'Бюджет',
      imageUrl: 'URL изображения',
      description: 'Описание',
      addMovie: 'Добавить фильм',
      totalMovies: 'Общее количество фильмов',
      delete: 'Удалить',
      movieTitle: 'Название фильма',
      enterUsername: 'Введите имя пользователя',
      enterPassword: 'Введите пароль',
      fillFields: 'Пожалуйста, заполните все поля',
      added: 'Фильм успешно добавлен!',
      confirmDelete: 'Удалить',
    }
  };

  const t = translations[language];

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().startsWith(searchTerm.toLowerCase())
  );
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    image: '',
    year: new Date().getFullYear(),
    budget: '',
    description: ''
  });

  const handleLogin = (e) => {
    e.preventDefault();
    const success = login(username, password);
    if (!success) {
      setLoginError('admin , 1234');
    } else {
      setLoginError('');
      setUsername('');
      setPassword('');
    }
  };

  const handleAddMovie = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.image || !formData.budget || !formData.description) {
      alert(t.fillFields);
      return;
    }
    addMovie(formData);
    setFormData({
      title: '',
      image: '',
      year: new Date().getFullYear(),
      budget: '',
      description: ''
    });
    setShowForm(false);
    alert(t.added);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'year' ? parseInt(value) : value
    });
  };

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
        <div className="bg-gray-900 p-8 rounded-lg shadow-2xl w-full max-w-md">
          <h1 className="text-3xl font-bold mb-6 text-center">{t.adminLogin}</h1>
          
          {loginError && (
            <div className="bg-red-600 text-white p-3 rounded mb-4">
              {loginError}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-gray-300 text-sm font-bold mb-2">
                {t.username}
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:border-red-600"
                placeholder={t.enterUsername}
              />
            </div>

            <div>
              <label className="block text-gray-300 text-sm font-bold mb-2">
                {t.password}
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:border-red-600"
                placeholder={t.enterPassword}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition"
            >
              {t.login}
            </button>
          </form>

          <p className="text-gray-400 text-center mt-6 text-sm">
            {t.defaultAdmin}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-4 pt-20">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">{t.adminPanel}</h1>
          <button
            onClick={logout}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded transition"
          >
            {t.logout}
          </button>
        </div>

        {/* Add Movie Button */}
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded mb-8 transition"
        >
          {showForm ? t.cancel : t.addNewMovie}
        </button>

        {/* Add Movie Form */}
        {showForm && (
          <div className="bg-gray-900 p-8 rounded-lg shadow-2xl mb-8 max-w-2xl">
            <h2 className="text-2xl font-bold mb-6">{t.addNewMovieTitle}</h2>
            <form onSubmit={handleAddMovie} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm font-bold mb-2">
                    {t.title}
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleFormChange}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:border-red-600"
                    placeholder={t.movieTitle}
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-bold mb-2">
                    {t.year}
                  </label>
                  <input
                    type="number"
                    name="year"
                    value={formData.year}
                    onChange={handleFormChange}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:border-red-600"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-bold mb-2">
                    Budget
                  </label>
                  <input
                    type="text"
                    name="budget"
                    value={formData.budget}
                    onChange={handleFormChange}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:border-red-600"
                    placeholder="e.g., $100M"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-bold mb-2">
                    Image URL
                  </label>
                  <input
                    type="url"
                    name="image"
                    value={formData.image}
                    onChange={handleFormChange}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:border-red-600"
                    placeholder="Image URL"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-bold mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleFormChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:border-red-600"
                  rows="4"
                  placeholder="Movie description"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition"
              >
                Add Movie
              </button>
            </form>
          </div>
        )}

        {/* Movies List */}
        <div>
          <h2 className="text-2xl font-bold mb-6">{t.totalMovies}: {filteredMovies.length}</h2>
          {filteredMovies.length === 0 && searchTerm ? (
            <div className="text-center py-12">
              <p className="text-white text-xl">Bu kino bizda yo'q</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMovies.map((movie) => (
                <div
                  key={movie.id}
                  className="bg-gray-900 p-4 rounded-lg hover:shadow-lg transition"
                >
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-full h-48 object-cover rounded mb-4"
                  />
                  <h3 className="font-bold text-lg mb-2">{movie.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {movie.year} • {movie.budget}
                  </p>
                  <button
                    onClick={() => {
                      if (window.confirm(`Delete "${movie.title}"?`)) {
                        deleteMovie(movie.id);
                      }
                    }}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition"
                  >
                    {t.delete}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
