import React from 'react';
import { Link } from 'react-router-dom';

export const ProductListItem = ({ product }) => {
  return (
    <div className="product-item">
      <img src={product.imgUrl} alt={product.model} />
      <h3>{product.brand} {product.model}</h3>
      <p>${product.price}</p>
      <Link to={`/product/${product.id}`}>View Details</Link>
    </div>
  );
};
