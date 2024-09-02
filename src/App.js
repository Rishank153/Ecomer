import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Home';
import CartPage from './CartPage';
import LoginPage from './LoginPage';
import IMG from './images/img11.jpg'
import IMG2 from './images/img14.jpeg'
import IMG3 from './images/img17.jpg'
import IMG4 from './images/img20.jpg'
import IMG5 from './images/img21.jpg'
import IMG6 from './images/img22.webp'
import IMG7 from './images/img23.jpg'
import IMG8 from './images/img25.jpg'
import './App.css'; 

const App = () => {
  const [products] = useState([
    { id: 1, name: 'Product 1', price: 1000.0, image: IMG },
    { id: 2, name: 'Product 2', price: 3999.0, image: IMG2 },
    { id: 3, name: 'Product 3', price: 799.0, image: IMG3 },
    { id: 4, name: 'Product 4', price: 8999.0, image: IMG4 },
    { id: 5, name: 'Product 5', price: 566.0, image: IMG5 },
    { id: 6, name: 'Product 6', price: 800.0, image: IMG6 },
    { id: 7, name: 'Product 7', price: 5666.0, image: IMG7 },
    { id: 8, name: 'Product 8', price: 100000.0, image: IMG8 },
  ]);

  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null);

  const addToCart = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((x) => x.id !== id));
  };

  const login = (username) => {
    setUser(username);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <div className="App">
      <Header />
      <Navbar cartCount={cartItems.length} user={user} logout={logout} />
      <Routes>
        <Route path="/" element={<Home products={products} addToCart={addToCart} />} />
        <Route path="/cart" element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart} />} />
        <Route path="/login" element={<LoginPage login={login} />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
