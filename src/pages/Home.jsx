import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel';
import MovieCard from '../components/MovieCard';
import { MovieContext } from '../context/MovieContext';

const Home = () => {
  const { movies, isLoading, searchTerm, language } = useContext(MovieContext)

  const translations = {
    uz: {
      movies: 'Kinolar',
      seeAll: 'Barchasini ko\'rish →',
      loading: 'Yuklanmoqda...',
      noMovie: 'Bu kino bizda yo\'q',
    },
    en: {
      movies: 'Movies',
      seeAll: 'See All →',
      loading: 'Loading...',
      noMovie: 'This movie is not with us',
    },
    ru: {
      movies: 'Фильмы',
      seeAll: 'Посмотреть все →',
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
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto mb-4"></div>
          <p className="text-white text-lg">{t.loading}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-12 pb-10">
      <section className="w-full max-w-full px-0 pt-0">
        <Carousel />
      </section>

      <section className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8" id="movies">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">{t.movies}</h2>
          </div>
          <Link to="/all-movies" className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-emerald-400">
            {t.seeAll} 
          </Link>
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

export default Home;
