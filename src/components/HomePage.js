import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import SearchBar from './SerachBar';
import CategoryFilter from './CategoryFilter';
import Sorting from './Sorting';
import data from '../data/data.json';

function HomePage() {
  const [products, setProducts] = useState(data);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortOption, setSortOption] = useState('');

  useEffect(() => {
    let filteredProducts = data;

    if (searchTerm) {
      filteredProducts = filteredProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(
        product => product.category === selectedCategory
      );
    }

    if (sortOption) {
      filteredProducts = [...filteredProducts].sort((a, b) => {
        switch (sortOption) {
          case 'priceAsc':
            return a.price - b.price;
          case 'priceDesc':
            return b.price - a.price;
          case 'nameAsc':
            return a.name.localeCompare(b.name);
          case 'nameDesc':
            return b.name.localeCompare(a.name);
          default:
            return 0;
        }
      });
    }

    setProducts(filteredProducts);
  }, [searchTerm, selectedCategory, sortOption]);

  return (
    <div>
      <SearchBar onSearch={setSearchTerm} />
      <CategoryFilter
        categories={[...new Set(data.map(product => product.category))]}
        onFilter={setSelectedCategory}
      />
      <Sorting onSort={setSortOption} />
      <ProductList products={products} />
    </div>
  );
}

export default HomePage;
