import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MovieContext } from '../context/MovieContext';

const MovieDetail = () => {
  const { id } = useParams();
  const { getMovieById } = useContext(MovieContext);
  const movie = getMovieById(id);

  if (!movie) {
    return (
      <div>
        <div>
          <h1>Movie Not Found</h1>
          <Link to="/">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Go Back Link */}
      <div>
        <Link to="/">
          ← Back to Home
        </Link>
      </div>

      {/* Movie Detail */}
      <div>
        <div>
          {/* Poster */}
          <div>
            <img
              src={movie.image}
              alt={movie.title}
            />
          </div>

          {/* Details */}
          <div>
            <h1>{movie.title}</h1>

            <div>
              <div>
                <p>Year</p>
                <p>{movie.year}</p>
              </div>
              <div>
                <p>Budget</p>
                <p>{movie.budget}</p>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3>Description</h3>
              <p>
                {movie.description}
              </p>
            </div>

            {/* Action Buttons */}
            <div>
              <button>
                ▶ Play
              </button>
              <button>
                + My List
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
