import { useContext, useEffect, useState } from 'react';
import getMovies from '../apis/getMovies';
import SearchContext from '../context/SearchContext';
import Movie from './Movie';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { searchInput } = useContext(SearchContext);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const moviesData = await getMovies(searchInput);
        setMovies(moviesData);
        setError('Movie Not Found');
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    })();
  }, [searchInput]);
  return (
    <div>
      <div className="flex flex-wrap justify-center items-center">
        {loading ? (
          <p className="flex justify-center items-center">Loading...</p>
        ) : movies ? (
          movies.map((movie, index) => <Movie key={index} movie={movie} />)
        ) : (
          <p className=" bg-red-400 p-2 text-center rounded-md">{error}</p>
        )}
      </div>
    </div>
  );
};

export default Movies;
