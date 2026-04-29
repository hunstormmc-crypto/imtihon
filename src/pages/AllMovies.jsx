import React, { useContext } from 'react';
import MovieCard from '../components/MovieCard';
import { MovieContext } from '../context/MovieContext';

const AllMovies = () => {
  const { movies, isLoading, searchTerm, language } = useContext(MovieContext);

  const translations = {
    uz: {
      allMovies: 'Barcha filmlar',
      movies: 'Kinolar',
      loading: 'Yuklanmoqda...',
      noMovie: 'Bu kino bizda yo\'q',
    },
    en: {
      allMovies: 'All Movies',
      movies: 'Movies',
      loading: 'Loading...',
      noMovie: 'This movie is not with us',
    },
    ru: {
      allMovies: 'Все фильмы',
      movies: 'Фильмы',
      loading: 'Загрузка...',
      noMovie: 'Этого фильма у нас нет',
    }
  };

  const t = translations[language];

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center pt-20">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto mb-4"></div>
          <p className="text-white text-lg">{t.loading}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-10">
      <section className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 pt-8">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-slate-400">{t.allMovies}</p>
          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">{t.movies}</h2>
        </div>

        {filteredMovies.length === 0 && searchTerm ? (
          <div className="text-center py-12">
            <p className="text-white text-xl">{t.noMovie}</p>
          </div>
        ) : (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {filteredMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default AllMovies;
