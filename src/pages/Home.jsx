import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel';
import MovieCard from '../components/MovieCard';
import { MovieContext } from '../context/MovieContext';

const Home = () => {
  const { movies } = useContext(MovieContext)

  return (
    <div className="space-y-12 pb-10">
      <section className="w-full max-w-full px-0 pt-0">
        <Carousel />
      </section>

      <section className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">🎥 Yangi filmlar</p>
            <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">Kinolar</h2>
          </div>
          <Link to="/all-movies" className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-emerald-400">
            Barchasini ko'rish → 
          </Link>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
