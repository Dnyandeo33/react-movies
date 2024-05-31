import PropTypes from 'prop-types';
import movies from '../film.json';
import filterMovies from '../util/filterMovies';
import Movie from './Movie';

const Movies = ({ userInput }) => {
  const filterMovie = filterMovies(movies, userInput);
  return (
    <div>
      {filterMovie.length > 0 ? (
        <div className="flex flex-wrap justify-center items-center">
          {filterMovie.map((movie, index) => (
            <Movie key={index} movie={movie} />
          ))}
        </div>
      ) : (
        <p className="flex items-center justify-center text-white rounded-md mx-auto h-10 bg-red-600 w-44">
          No movies found
        </p>
      )}
    </div>
  );
};

Movies.propTypes = {
  userInput: PropTypes.string.isRequired,
};

export default Movies;
