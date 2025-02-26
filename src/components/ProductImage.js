import React from 'react';

export const ProductImage = ({ image }) => {
  return (
    <div className="product-image">
      <img src={image} alt="Product" />
    </div>
  );
};
