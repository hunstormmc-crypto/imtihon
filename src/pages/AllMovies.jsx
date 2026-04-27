import React, { useContext } from 'react';
import MovieCard from '../components/MovieCard';
import { MovieContext } from '../context/MovieContext';

const AllMovies = () => {
  const { movies } = useContext(MovieContext);

  return (
    <div className="pb-10">
      <section className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 pt-8">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-slate-400">🎥 Barcha filmlar</p>
          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">Kinolar</h2>
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

export default AllMovies;
