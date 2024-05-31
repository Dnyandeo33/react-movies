import { useState } from 'react';
import Header from './Header';
import Movies from './Movies';
import SearchInput from './SearchInput';

const Main = () => {
  const [userInput, setUserInput] = useState('');

  const getInput = (input) => {
    setUserInput(input);
  };

  return (
    <div>
      <Header title={'Entertainment'} />
      <SearchInput getInput={getInput} />
      <Movies userInput={userInput} />
    </div>
  );
};

export default Main;
