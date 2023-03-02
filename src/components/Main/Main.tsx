import React, { FC } from 'react';
import { useAppSelector } from '../../utils/hooks';
import './main.scss';

const Main: React.FC = () => {
  const { products } = useAppSelector((state) => state.products);
  return (
    <div className="block-products">
      <ul className="block-products__list">
        {products.map((product) => (
          <li key={product.id} className="block-products__list-elem">
            <h3 className="block-products__elem-title">{product.title}</h3>
            <p>{product.description}</p>
            <div className="block-products__info-block">
              <img
                className="block-products__elem-img "
                src={product.image}
                alt="clothes picture"
              />
              <p>Price: {product.price}</p>
              <div className="block-products__elem-rating">
                <p>Count: {product.rating.count}</p>
                <p>Rate: {product.rating.rate}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Main;
