import React, { useEffect } from 'react';
import { getDataFromAPI } from './utils/getDatafromApi';
import { set } from './redux/reducers/shopReducer';
import { useAppDispatch, useAppSelector } from './utils/hooks';
import type { ProductType } from './redux/reducers/shopReducer';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.products);

  useEffect(() => {
    getDataFromAPI().then((resp: ProductType[]): void => {
      dispatch(set(resp));
    });
  }, []);
  console.log(products);
  return <div>Hello World</div>;
};

export default App;
