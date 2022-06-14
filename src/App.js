import './App.css';

import {
  Routes,
  Route
} from "react-router-dom";

import HomePage from './containers/HomePage';
import ProductListPage from './containers/ProductListPage';
import ProductDetailsPage from './containers/ProductDetailsPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:productSlug/:productId/p" element={<ProductDetailsPage />} />
        <Route path="/:slug" element={<ProductListPage />} />
      </Routes>
    </div>
  );
}

export default App;
