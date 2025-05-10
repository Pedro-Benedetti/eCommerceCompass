import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './custom_styles.css'; // Import custom styles
import App from './App.tsx'; // Home Page
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CategoryPage from './pages/CategoryPage.tsx'; // Import CategoryPage
import ProductDetailPage from './pages/ProductDetailPage.tsx'; // Import ProductDetailPage (Contact Page)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/category' element={<CategoryPage />} />
        <Route path='/product' element={<ProductDetailPage />} /> {/* This will be the Contact/Product Detail page */}
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
