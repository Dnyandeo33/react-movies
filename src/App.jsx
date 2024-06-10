import { useEffect, useState } from 'react';
import getMovies from './apis/getMovies';
import Header from './components/Header';
import Movies from './components/Movies';
import SearchInput from './components/SearchInput';
import SearchContext from './context/SearchContext';

const App = () => {
  const [searchInput, setSearchInput] = useState('');

  return (
    <SearchContext.Provider
      value={{ searchInput: searchInput, setSearchInput: setSearchInput }}
    >
      <div>
        <Header title="Movies" />
        <SearchInput />
        <Movies />
      </div>
    </SearchContext.Provider>
  );
};

export default App;
