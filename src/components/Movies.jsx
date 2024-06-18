import { useEffect } from 'react';
import Movie from './Movie';

import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../redux/moviesSlice';

const Movies = () => {
  const dispatch = useDispatch();

  const { loading, search, error, movies } = useSelector(
    (state) => state.movies
  );

  useEffect(() => {
    dispatch(getMovies(search));
  }, [dispatch, search]);

  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        {loading && <p>Loading...</p>}
        {error && (
          <p className="bg-red-400 p-2 text-center rounded-md">
            {movies.Error}
          </p>
        )}
        <div className="flex flex-wrap justify-center items-center">
          {movies.Search &&
            movies.Search.map((movie, index) => (
              <Movie key={index} movie={movie} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Movies;
