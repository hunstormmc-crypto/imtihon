import React, { useContext, useState } from 'react';
import { MovieContext } from '../context/MovieContext';

const Admin = () => {
  const { isAdmin, login, logout, movies, addMovie, deleteMovie } = useContext(MovieContext);
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
      alert('Please fill in all fields');
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
    alert('Movie added successfully!');
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
          <h1 className="text-3xl font-bold mb-6 text-center">Admin Login</h1>
          
          {loginError && (
            <div className="bg-red-600 text-white p-3 rounded mb-4">
              {loginError}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-gray-300 text-sm font-bold mb-2">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:border-red-600"
                placeholder="Enter username"
              />
            </div>

            <div>
              <label className="block text-gray-300 text-sm font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:border-red-600"
                placeholder="Enter password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition"
            >
              Login
            </button>
          </form>

          <p className="text-gray-400 text-center mt-6 text-sm">
            default admin:admin  parol:1234
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Admin Panel</h1>
          <button
            onClick={logout}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded transition"
          >
            Logout
          </button>
        </div>

        {/* Add Movie Button */}
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded mb-8 transition"
        >
          {showForm ? 'Cancel' : '+ Add New Movie'}
        </button>

        {/* Add Movie Form */}
        {showForm && (
          <div className="bg-gray-900 p-8 rounded-lg shadow-2xl mb-8 max-w-2xl">
            <h2 className="text-2xl font-bold mb-6">Add New Movie</h2>
            <form onSubmit={handleAddMovie} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm font-bold mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleFormChange}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:border-red-600"
                    placeholder="Movie title"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-bold mb-2">
                    Year
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
          <h2 className="text-2xl font-bold mb-6">Jami kinolar soni: {movies.length}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {movies.map((movie) => (
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
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
