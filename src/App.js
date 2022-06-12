import './App.css';

import {
  Routes,
  Route
} from "react-router-dom";

import HomePage from './containers/HomePage';
import ProductListPage from './containers/ProductListPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:slug" element={<ProductListPage />} />
      </Routes>
    </div>
  );
}

export default App;
