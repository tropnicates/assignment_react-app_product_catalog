import React from 'react';
import { Link } from 'react-router-dom';

function ProductItem({ product }) {
  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} />
      <div className='name'>{product.name}</div>
      <div className='price'>${product.price}</div>
      <Link to={`/product/${product.id}`} className="view-details-btn">
        View Details
      </Link>
    </div>
  );
}

export default ProductItem;
