import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

export const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(`https://itx-frontend-test.onrender.com/api/product/${id}`);
      console.log("ProductDetailsPage.js: Datos recibidos", response.data);
      setProduct(response.data);
    };
    fetchProduct();
  }, [id]);

  const addToCart = (productId, colorCode, storageCode) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ productId, colorCode, storageCode });
    localStorage.setItem('cart', JSON.stringify(cart));

    window.dispatchEvent(new Event('storage'));
  };


  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <div className="product-detail">
        <div className="product-image">
          <img src={ product.imgUrl } alt={ product.model } />
        </div>
        <div className="product-info">
          <h2>{ product.brand } - { product.model }</h2>
          <p>Price: ${ product.price }</p>
          <p>CPU: { product.cpu }</p>
          <p>RAM: { product.ram }</p>
          <p>Operating System: { product.os }</p>
          <p>Screen Resolution: { product.screenResolution }</p>
          <p>Battery: { product.battery }</p>
          <p>Cameras: { product.cameras }</p>
          <p>Dimensions: { product.dimensions }</p>
          <p>Weight: { product.weight }</p>

          <label> Storage </label>
          <select>
            { product.storageOptions && product.storageOptions.length >= 0 ? (
              product.storageOptions.map(option => (
                <option key={ option.code } value={ option.code }>{ option.value }</option>
              ))
            ) : null }
          </select>

          <label> Color </label>
          <select>
            { product.colorOptions && product.colorOptions.length >= 0 ? (
              product.colorOptions.map(option => (
                <option key={ option.code } value={ option.code }>{ option.value }</option>
              ))
            ) : null }
          </select>

  <button onClick={ () => {
      if (product.colorOptions && product.colorOptions.length > 0 && product.storageOptions && product.storageOptions.length > 0) {
        addToCart(product.id, product.colorOptions[0].code, product.storageOptions[0].code);
      } else {
        alert('Please select a color and storage option');
      }
    }}>
            Add to Cart
          </button>

          <Link to="/">Back to Products</Link>
        </div>
      </div>
    </div>
  );
};
