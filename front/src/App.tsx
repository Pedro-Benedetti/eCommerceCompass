import './App.css';
import ProductList from './components/ProductsList';
import SlideLovelyCustomer from './components/SlideLovelyCustomer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Category from './pages/Category';

function App() {
  const images = ['/imagens/catfood1.png'];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </Router>
  );
}

export default App;
