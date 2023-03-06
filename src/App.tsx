import React from 'react';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Slide from './components/Slide/Slide';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Slide />
      <Main />
    </>
  );
};

export default App;
