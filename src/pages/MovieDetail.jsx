import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MovieContext } from '../context/MovieContext';

const MovieDetail = () => {
  const { id } = useParams();
  const { getMovieById } = useContext(MovieContext);
  const movie = getMovieById(id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!movie) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Film topilmadi</h1>
          <p className="text-gray-400">Kechirasiz, bu film mavjud emas.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section with Background Image */}
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={movie.image}
            alt={movie.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 flex items-center h-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              {/* Poster */}
              <div className="lg:col-span-1">
                <div className="relative aspect-[2/3] max-w-sm mx-auto lg:mx-0 overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Details */}
              <div className="lg:col-span-2 text-white">
                <div className="space-y-6">
                  <div>
                    <h1 className="text-4xl md:text-6xl font-black mb-2 leading-tight">
                      {movie.title}
                    </h1>
                    <p className="text-xl text-gray-300 font-medium">
                      {movie.year}
                    </p>
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400">Byudjet:</span>
                      <span className="text-white font-medium">{movie.budget}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="max-w-2xl">
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {movie.description}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    <button className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-bold text-lg transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2">
                      <span>▶</span>
                      Tomosha qilish
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
