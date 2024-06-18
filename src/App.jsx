import Header from './components/Header';
import Movies from './components/Movies';
import SearchInput from './components/SearchInput';

const App = () => {
  return (
    <div>
      <Header title="Movies" />
      <SearchInput />
      <Movies />
    </div>
  );
};

export default App;
