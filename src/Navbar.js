import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount, user, logout }) => {
  return (
    <nav className="navbar">
      <Link to="/cart">Cart ({cartCount})</Link>
      {user ? (
        <>
          <span>Hello, {user}</span>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
};

export default Navbar;
