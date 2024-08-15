import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { createOrder } from '../redux/orderSlice';
import { useRouter } from 'next/router';

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { cartItems, totalPrice } = useSelector((state: RootState) => state.cart);
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(createOrder({ cartItems, address, paymentMethod }))
      .unwrap()
      .then(() => {
        router.push('/order-confirmation'); // Redirect to order confirmation page
      })
      .catch(() => {
        console.error('Checkout failed');
      });
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <form onSubmit={handleCheckout} className="w-1/2 mx-auto">
        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700">Shipping Address</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="paymentMethod" className="block text-gray-700">Payment Method</label>
          <select
            id="paymentMethod"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          >
            <option value="Credit Card">Credit Card</option>
            <option value="PayPal">PayPal</option>
            <option value="Bank Transfer">Bank Transfer</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Place Order (${totalPrice.toFixed(2)})
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
