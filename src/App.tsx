import React from 'react';
import { getDataFromAPI } from './utils/getDatafromApi';
import { useAppDispatch } from './utils/hooks';
import type { ProductType } from './redux/reducers/shopReducer';

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  getDataFromAPI().then((resp: ProductType[]) => {
    dispatch({ type: 'set', payload: resp });
  });
  return <div>Hello World</div>;
};

export default App;
