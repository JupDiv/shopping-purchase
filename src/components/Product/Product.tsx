import React from 'react';
import './index.scss';
import { ProductProps } from '../../types/commonTypes';

function Product({
  title,
  description,
  image,
  price,
  rating,
}: ProductProps): JSX.Element {
  return (
    <li className="product">
      <h3 className="product__title">{title}</h3>
      <p>{description}</p>
      <div className="product__info-block">
        <img className="product__elem-img " src={image} alt="clothes picture" />
        <p>Price: {price}</p>
        <div className="product__elem-rating">
          <p>Count: {rating.count}</p>
          <p>Rate: {rating.rate}</p>
        </div>
      </div>
    </li>
  );
}

export default Product;
