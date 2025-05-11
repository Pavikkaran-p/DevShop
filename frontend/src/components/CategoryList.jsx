import React from 'react';
import { Link } from 'react-router-dom';

const CategoryList = () => {
  const categories = [
    { id: 1, name: 'Electronics', icon: '💻' },
    { id: 2, name: 'Foods & Snacks', icon: '🍔' },
    { id: 3, name: 'Books', icon: '📚' },
    { id: 4, name: 'Songs', icon: '🎵' },
    { id: 5, name: 'Note & Pens', icon: '✏️' }
  ];

  return (
    <div className="flex flex-wrap gap-4 p-4">
      {categories.map((category) => (
        <Link
          key={category.id}
          to={`/category/${category.name.toLowerCase().replace(/ /g, '-')}`}
          className="flex items-center gap-2 bg-white hover:bg-blue-50 text-gray-800 font-medium py-2 px-4 rounded-lg shadow-sm transition-all duration-200 border border-gray-200"
        >
          <span className="text-xl">{category.icon}</span>
          {category.name}
        </Link>
      ))}
    </div>
  );
};

export default CategoryList;
