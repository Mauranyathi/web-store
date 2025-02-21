// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import HomePage from './components/HomePage';
import RegistrationPage from './components/RegistrationPage';
import LoginPage from './components/LoginPage';
import StorePage from './components/StorePage';
import CartPage from './components/CartPage';
import Header from './components/Header';
import './App.css';

function App() {
  const [loggedInUser, setLoggedInUser] = useState('');

  useEffect(() => {
    // Retrieve logged-in user from localStorage
    const storedUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (storedUser) {
      setLoggedInUser(storedUser);
    }
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <div>
          <Header username={loggedInUser} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage setLoggedInUser={setLoggedInUser} />} />
            <Route path="/store" element={<StorePage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
