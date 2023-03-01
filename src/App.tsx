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

  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <img src={product.image} alt="clothes picture" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
