import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductBySlug } from '../../redux/productSlice';
import { RootState } from '../../redux/store';
import { useRouter } from 'next/router';

const ProductDetailPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    if (slug) {
      dispatch(fetchProductBySlug(slug as string));
    }
  }, [slug, dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">{product?.name}</h1>
      <p className="text-gray-700 mb-4">{product?.description}</p>
      <p className="text-gray-900 font-bold text-2xl">${product?.price.toFixed(2)}</p>
      <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetailPage;
