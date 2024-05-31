import PropTypes from 'prop-types';
import { useState } from 'react';

const SearchInput = ({ getInput }) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
    getInput(value);
  };

  return (
    <div className=" container mx-auto flex w-auto justify-center items-center p-6">
      <input
        className="h-10 sm:w-96 p-5 border border-gray-500 rounded-md"
        type="text"
        value={value}
        onChange={(e) => handleChange(e)}
        placeholder="Search"
      />
    </div>
  );
};

SearchInput.propTypes = {
  getInput: PropTypes.func.isRequired,
};

export default SearchInput;
