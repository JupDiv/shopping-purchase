import React, { useEffect } from 'react';
import { getDataFromAPI } from './utils/getDatafromApi';
import { set } from './redux/reducers/shopReducer';
import { useAppDispatch } from './utils/hooks';
import type { ProductType } from './redux/reducers/shopReducer';
import Main from './components/Main/Main';

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    getDataFromAPI().then((resp: ProductType[]): void => {
      dispatch(set(resp));
    });
  }, []);

  return <Main />;
};

export default App;
