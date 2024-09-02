import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">ShopHaven</h1>
      <nav className="header-nav">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
       
      </nav>
    </header>
  );
};

export default Header;
