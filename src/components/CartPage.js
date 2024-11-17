import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './Cart'; 

function CartPage() {
  const navigate = useNavigate();
  
  const { cartItems, removeFromCart, clearCart } = useCart();
  
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <div className="empty-cart-message">Your Cart is Empty</div>
        <button className="go-shopping-button" onClick={() => navigate('/')}>
          Go Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="page-title">Your Cart</div>
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <div className="item-name">{item.name}</div>
              <div className="item-price">Price: ${item.price}</div>
              <div className="item-quantity">Quantity: {item.quantity}</div> {/* Display quantity as text */}
            </div>
            <button
              className="remove-button"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="cart-footer">
        <div className="total">Total: ${totalPrice.toFixed(2)}</div>
        <button className="clear-cart-button" onClick={clearCart}>
          Clear Cart
        </button>
        <button
          className="checkout-button"
          onClick={() => alert('Checkout process started!')}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartPage;
