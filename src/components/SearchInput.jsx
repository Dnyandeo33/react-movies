import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearch } from '../redux/moviesSlice';

const SearchInput = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === '') {
      return;
    }
    dispatch(setSearch(value));
    setValue('');
  };

  return (
    <div className=" container mx-auto flex w-auto justify-center items-center p-6">
      <form onClick={(e) => handleSubmit(e)}>
        <input
          className="h-10 sm:w-96 p-5 border border-gray-500 rounded-md"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search"
        />
        <button
          className="bg-[#264653] h-10 w-20 ml-2 rounded-md text-white"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
