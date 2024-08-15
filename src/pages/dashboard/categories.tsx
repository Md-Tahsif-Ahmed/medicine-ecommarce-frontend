import React, { useState, useEffect } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { fetchCategories, createCategory } from '../../redux/categorySlice';

const ManageCategories = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state: RootState) => state.categories);
  const [name, setName] = useState('');
  const [slug, setSlug] = useState('');

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleCreateCategory = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(createCategory({ name, slug }));
    setName('');
    setSlug('');
  };

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-4">Manage Categories</h1>
      <form onSubmit={handleCreateCategory} className="mb-6">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="slug" className="block text-gray-700">Slug</label>
          <input
            type="text"
            id="slug"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Add Category
        </button>
      </form>
      <ul>
        {categories.map((category) => (
          <li key={category._id} className="border-b py-2">
            {category.name}
          </li>
        ))}
      </ul>
    </DashboardLayout>
  );
};

export default ManageCategories;
