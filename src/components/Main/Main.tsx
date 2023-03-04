import React, { FC } from 'react';
import { useAppSelector } from '../../utils/hooks';
import Product from '../Product/Product';
import { BasketState, ProductProps } from '../../types/commonTypes';
import './index.scss';

const Main: React.FC = (): JSX.Element => {
  const { products }: BasketState = useAppSelector((state) => state.products);

  return (
    <div className="block-products">
      <ul className="block-products__list">
        {products.map((product: ProductProps) => (
          <Product key={product.id} {...product} />
        ))}
      </ul>
    </div>
  );
};

export default Main;
