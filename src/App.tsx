import React, { useEffect } from 'react';
import { getDataFromAPI } from './utils/getDatafromApi';
import { set } from './redux/reducers/shopReducer';
import { useAppDispatch } from './utils/hooks';
import type { ProductType } from './types/commonTypes';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Slide from './components/Slide/Slide';

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    getDataFromAPI().then((resp: ProductType[]): void => {
      dispatch(set(resp));
    });
  }, []);

  return (
    <>
      <Header />
      <Slide />
      <Main />
    </>
  );
};

export default App;
