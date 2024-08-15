import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/productSlice';
import { RootState } from '../../redux/store';
import Link from 'next/link';

const ProductListingPage = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product._id} className="border p-4 rounded">
            <h2 className="text-xl font-bold mb-2">{product.name}</h2>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <p className="text-gray-900 font-bold">${product.price.toFixed(2)}</p>
            <Link href={`/products/${product.slug}`}>
              <a className="text-blue-500">View Details</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;
