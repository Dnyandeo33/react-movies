import PropTypes from 'prop-types';
import { useState } from 'react';
import { BiSolidLike } from 'react-icons/bi';
import noImage from '../asset/noImage.jpeg';

const Movie = ({ movie }) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked((prev) => !prev);
  };

  return (
    <div className="flex justify-center items-center mt-8 mb-8">
      <div className="w-full ml-1 mr-1 flex flex-col justify-center items-center sm:w-80 border-gray-700 text-center">
        <img
          className="rounded-lg h-[28rem] shadow-slate-800 shadow-lg "
          src={movie.Poster === 'N/A' ? noImage : movie.Poster}
          alt={movie.Title}
        />
        <div className="text-center text-white bg-[#172a31] shadow-slate-800 shadow-lg w-[70%] rounded-xl -mt-28 z-10 p-5 flex items-center flex-col">
          <h2 className="font-semibold text-lg">{movie.Title}</h2>
          <h2 className="font-semibold text-lg">{`Release in: ${movie.Year}`}</h2>
          <span className="text-slate-500 cursor-pointer flex justify-center items-center gap-8 text-sm mt-2 pl-3 pr-3">
            <BiSolidLike
              onClick={toggleLike}
              color={liked ? 'red' : 'gray'}
              size={20}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default Movie;
