import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from './Cart';
import data from '../data/data.json';

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = data.find(item => item.id === parseInt(id));

  const { addToCart } = useCart();

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="product-details">
      <div className="header">
        <button className="back-button" onClick={() => navigate(-1)}>
          Back
        </button>
        <button
          className="back-button"
          onClick={() => navigate('/cart')}
        >
          Go to Cart
        </button>
      </div>
      <div className="product-info">
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="details">
          <h1 className="name">{product.name}</h1>
          <p className="price">${product.price}</p>
          <p className="description">{product.description}</p>
          <button
            className="add-to-cart-button"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
