import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { removeFromCart, updateQuantity } from '../redux/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state: RootState) => state.cart);

  const handleRemoveItem = (productId: string) => {
    dispatch(removeFromCart(productId));
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    dispatch(updateQuantity({ productId, quantity }));
  };

  return (
    <div className="w-1/3 p-4 bg-white shadow-lg rounded">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.product._id} className="flex justify-between items-center mb-4">
              <span>{item.product.name}</span>
              <span>${item.product.price.toFixed(2)}</span>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => handleUpdateQuantity(item.product._id, Number(e.target.value))}
                className="w-16 text-center border rounded"
              />
              <button
                onClick={() => handleRemoveItem(item.product._id)}
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
