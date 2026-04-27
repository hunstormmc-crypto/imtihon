import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`} className="group block w-64">
      {/* Rasm qismi - Portret formatda */}
      <div className="relative aspect-[2/3] overflow-hidden rounded-2xl bg-slate-900">
        <img
          src={movie.image}
          alt={movie.title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      {/* Ma'lumotlar qismi */}
      <div className="mt-3 space-y-0.5">
        <h3 className="text-[14px] font-medium text-white truncate group-hover:text-gray-300">
          {movie.title}
        </h3>
        <p className="text-[12px] text-gray-500 font-normal">
          {movie.year}
        </p>
      </div>
    </Link>
  );
};

export default MovieCard;