import React from 'react';
import Link from 'next/link';

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex">
      <aside className="w-64 bg-gray-800 text-white h-screen p-4">
        <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
        <nav>
          <ul>
            <li className="mb-4">
              <Link href="/dashboard">
                <a className="text-white">Dashboard</a>
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/dashboard/categories">
                <a className="text-white">Manage Categories</a>
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/dashboard/products">
                <a className="text-white">Manage Products</a>
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/dashboard/orders">
                <a className="text-white">Manage Orders</a>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
