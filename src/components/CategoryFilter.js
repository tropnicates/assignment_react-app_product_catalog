import React from 'react';

function CategoryFilter({ categories, onFilter }) {
  return (
    <div className="category-filter">
      <select onChange={e => onFilter(e.target.value)}>
        <option value="">All Categories</option>
        {categories.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategoryFilter;
