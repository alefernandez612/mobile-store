import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ProductListItem, SearchBar } from '../components';

export const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    axios.get('https://itx-frontend-test.onrender.com/api/product')
      .then(response => {
        setProducts(response.data);
        setFilteredProducts(response.data);
      });
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = products.filter(product =>
      product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.model.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="product-list-page">
    <div className="search-container">
      <SearchBar onSearch={handleSearch} />
    </div>
      <div className="product-list">
        {filteredProducts.map(product => (
          <ProductListItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
