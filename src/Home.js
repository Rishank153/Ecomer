import React from 'react';
import ProductList from '../src/ProductList';

const Home = ({ products, addToCart }) => {
  return (
    <div className="home">
      
      <h1 >Welcome to the Store</h1>
      <ProductList products={products} addToCart={addToCart} />
    </div>
  );
};

export default Home;
