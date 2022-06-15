import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn, updateCart } from './actions';
import './App.css';

import {
  Routes,
  Route
} from "react-router-dom";

import HomePage from './containers/HomePage';
import ProductListPage from './containers/ProductListPage';
import ProductDetailsPage from './containers/ProductDetailsPage';
import CartPage from './containers/CartPage';

function App() {

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);


  useEffect(() => {

    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }

  }, [auth.authenticate]);

  useEffect(() => {
    dispatch(updateCart());
  }, [auth.authenticate]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/:productSlug/:productId/p" element={<ProductDetailsPage />} />
        <Route path="/:slug" element={<ProductListPage />} />
      </Routes>
    </div>
  );
}

export default App;
